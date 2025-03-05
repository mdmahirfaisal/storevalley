import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { ModeToggle } from "@/components/theme/theme_toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default async function NavigationBar() {
  const start = (
    <Link href={"/"}>
      <div className="flex gap-1 items-center cursor-pointer">
        <Image
          height={35}
          width={35}
          alt="logo"
          src="/globe.svg"
          className="mr-2 bg-white rounded-full"
        />
        <h1 className="text-xl font-semibold">Store Valley</h1>
      </div>
    </Link>
  );

  const end = (
    <div className="flex gap-3 items-center">
      <Button variant="secondary">
        <ModeToggle />
      </Button>

      <SignedOut>
        <div className="flex gap-3">
          <SignInButton>
            <Button variant="secondary">Sign In</Button>
          </SignInButton>

          <SignUpButton>
            <Button variant="secondary">Sign Up</Button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn>
        <UserButton showName />
      </SignedIn>
    </div>
  );
  return (
    <Card className="fixed w-full h-14 flex items-center justify-between px-4 !rounded-none">
      <div>{start}</div>
      <div>{end}</div>
    </Card>
  );
}
