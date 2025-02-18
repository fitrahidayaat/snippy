import { getServerSession } from "next-auth";
import { DropdownContent } from "./dropwdown-content";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface User {
  id?: string; // Biasanya ID pengguna jika tersedia
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default async function Dropdown() {
  const session = await getServerSession(authOptions);
	return (
		<>
				<DropdownContent user={session?.user as User} />
		</>
	);
}
