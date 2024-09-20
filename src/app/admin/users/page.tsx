import { CRUDLayout } from "@/components/CRUDLayout";
import { LinkButton } from "@/components/ui/Button";
import UsersTable from "@/features/auth/components/users/UsersTable";

import { fetchAllUsers } from "@/features/auth/services/usersService";

export default async function UsersAdministration() {
  const users = await fetchAllUsers();

  return (
    <CRUDLayout title="Users Management">
      <UsersTable users={users} />
    </CRUDLayout>
  );
}
