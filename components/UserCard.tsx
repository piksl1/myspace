import Link from "next/link";
import styles from "./UserCard.module.css";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="bg-gray-200 p-0 w-36">
      <img
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        className="w-36 h-30 object-cover mb-2"
      />
      <div className="px-2">
        <h3 className="mt-0 mb-4 text-link-color font-bold">
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}
