import getServerSession from "next-auth";
import About from "./about/page";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");
  return <About />;
}
