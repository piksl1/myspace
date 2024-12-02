"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInButton = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  if (status === "loading") {
    return <>Loading...</>;
  }
  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
    );
  }
  return <button onClick={() => signIn()}>Sign In</button>;
};
const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};

export { SignInButton, SignOutButton };
