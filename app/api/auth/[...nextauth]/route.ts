import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { Session, User, Account, Profile } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcryptjs";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Missing credentials");

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) throw new Error("Invalid credentials");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User | AdapterUser }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id; // Add user ID to the session
      }
      return session;
    },
    async signIn({
      user,
      account,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile;
    }) {
      if (account?.provider === "google") {
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              accounts: {
                create: {
                  provider: "google",
                  providerAccountId: account.providerAccountId,
                  providerType: "oauth",
                },
              },
            },
          });
        }
      }
      return true;
    },
  },
  pages: {
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
