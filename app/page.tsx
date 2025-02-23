import Nav from "@/components/ui/nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <div className="h-screen flex flex-col justify-center gap-6 max-w-screen-xl items-center px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-center">
            Build stronger digital connections
          </h1>

          <p className="text-sm lg:text-lg text-center">
            Use our URL shortener, QR Codes, and landing pages to engage your
            audience and connect them to the right information. Build, edit, and
            track everything inside the Snippy Connections Platform.
          </p>
          <div className="flex justify-center">
            <Link href="/login">
              <Button className="lg:text-lg py-6 px-8">Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
