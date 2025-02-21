import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateLinkPage() {
	return (
		<div className="px-3 xl:px-32 py-4">
			<h1 className="text-2xl font-bold">Create a Link</h1>
			<Card className="mt-8 pt-4 pb-6 px-8 bg-sidebar">
				<form className="mt-4 flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<Label htmlFor="destination" className="font-semibold">
							{" "}
							Destination{" "}
						</Label>
						<Input id="destination" name="destination" type="text" />
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="Title" className="font-semibold">
							{" "}
							Title{" "}
						</Label>
						<Input id="Title" name="Title" type="text" />
					</div>

					<div>
						<h2 className="text-xl font-bold mb-6">Short Link</h2>
						<div className="flex flex-col gap-2">
							<Label htmlFor="custom" className="font-semibold">
								{" "}
								Custom back-half{" "}
							</Label>
							<div className="flex items-center gap-2">
								<span>snippy.com/</span>
								<Input id="custom" name="custom" type="text" />
							</div>
						</div>
						<div className="flex justify-end mt-8">
							<Button className="w-36">Create Link</Button>
						</div>
					</div>
				</form>
			</Card>
		</div>
	);
}
