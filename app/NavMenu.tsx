import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "imp/components/buttons";

export default function NavMenu() {
  return (
    <nav className="flex bg-blue-800 text-white h-16 justify-between items-center">
      <Link href={"/"}>
        <Image
          src="/logo.svg" // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className="list-none flex mr-4">
        <li className="h-16 flex items-center p-1">
          <Link href={"/about"} className="text-white">
            About
          </Link>
        </li>
        <li className="h-16 flex items-center p-1">
          <Link href={"/blog"} className="text-white">
            Blog
          </Link>
        </li>
        <li className="h-16 flex items-center p-1">
          <Link href={"/users"} className="text-white">
            Users
          </Link>
        </li>
        <li className="h-16 flex items-center p-1">
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
