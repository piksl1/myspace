"use client";

import { useSession } from "next-auth/react";

export function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
