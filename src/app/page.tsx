/** @format */

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Button>Btn</Button>
      <ModeToggle />
    </div>
  );
}
