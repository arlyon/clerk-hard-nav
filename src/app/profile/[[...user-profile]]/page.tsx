import { SignedIn, SignedOut, SignIn, UserProfile } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SignedIn>
        <UserProfile path="/profile" routing="path" />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </>
  );
}
