import { Card as Panel } from "antd";
import { Container } from "./styles";
import UserTable from "../UserTable";

const users = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "Area Mock",
    type: "Regional",
    branches: [],
  },
];

export function UserList(): JSX.Element {
  return (
    <Container>
      <Panel title="Usuários">
        <UserTable dataSource={users} />
      </Panel>
    </Container>
  );
}
