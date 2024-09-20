import { FC } from "react";
import { User } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { LinkButton } from "@/components/ui/Button";
import DeleteUser from "../actions/DeleteUser";

interface Props {
  users: Partial<User>[];
}

const UsersTable: FC<Props> = ({ users }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Full name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((u) => (
          <TableRow key={u.id}>
            <TableCell className="font-medium">{u.fullname}</TableCell>
            <TableCell>{u.username}</TableCell>
            <TableCell>{u.role}</TableCell>
            <TableCell className="text-right">
              <LinkButton href={`/admin/users/${u.id}`}>Manage</LinkButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
