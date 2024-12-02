import UserCard from "imp/components/UserCard";
import { prisma } from "imp/lib/prisma";

const Users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
};

export default Users;
