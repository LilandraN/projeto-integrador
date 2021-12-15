import DefaultLayout from "../components/ui/DefaultLayout";
import { UserList } from "../components/user/UserList";

export default function Users(): JSX.Element {
  return (
    <DefaultLayout>
      <UserList />
    </DefaultLayout>
  );
}
