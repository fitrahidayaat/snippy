import { getServerSession, User } from "next-auth";
import { DropdownContent } from "./dropwdown-content";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dropdown() {
  const session = await getServerSession(authOptions);
	return (
		<>
				<DropdownContent user={session?.user as User} />
		</>
	);
}
