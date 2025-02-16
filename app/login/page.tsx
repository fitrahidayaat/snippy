import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle } from "react-icons/fa";
import Nav from "@/components/ui/nav"
import Link from "next/link"

export default function LoginPage() {
  return <>
    <Nav/>
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader className="min-w-96">
          <CardTitle className="text-center">Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="" className="flex flex-col">
            <div className="flex flex-col mb-4 gap-2">
              <Label htmlFor="username" className="">Username</Label>
              <Input id="username" name="username" type="email" placeholder="Username" className="" />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Password" className="" />
            </div>
            <Button type="submit" className="">Login</Button>
            <div className="flex justify-center items-center gap-3">
              <span className="bg-gray-600 h-[1px] w-full"/>
              <p className="text-center my-3">or</p>
              <span className="bg-gray-600 h-[1px] w-full"/>
            </div>
            <Button type="button" className="bg-background border border-primary text-foreground hover:bg-accent"><FaGoogle/>Continue with Google</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <CardDescription className="text-primary">Don&apos;t have an account? <Link className="text-blue-500 hover:underline" href="signup">Sign up</Link></CardDescription>
        </CardFooter>
      </Card>
    </div>
  </>
}