import { Card } from "@/components/ui/card";
import CreateLinkForm from "@/components/links/create-link-form";

export default async function CreateLinkPage() {
  return (
    <div className="px-3 xl:px-32 py-4">
      <h1 className="text-2xl font-bold">Create a Link</h1>
      <Card className="mt-8 pt-4 pb-6 px-8 bg-sidebar">
        <CreateLinkForm />
      </Card>
    </div>
  );
}
