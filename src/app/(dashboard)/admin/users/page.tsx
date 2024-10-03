import { CRUDLayout } from "@/components/CRUDLayout";
import { LinkButton } from "@/components/ui/Button";
import NewUser from "@/features/auth/components/NewUser/NewUser";
import UsersTable from "@/features/auth/components/users/UsersTable";

import { fetchAllUsers } from "@/features/auth/services/usersService";

export default async function UsersAdministration() {
  const users = await fetchAllUsers();

  return (
    <CRUDLayout title="Users Management" actions={<NewUser />}>
      <UsersTable users={users} />
    </CRUDLayout>
  );
}

export const revalidate = 0;
