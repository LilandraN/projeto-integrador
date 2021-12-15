import { Card as Panel } from "antd";
import { Container } from "./styles";
import UserTable from "../UserTable";
import { useEffect, useState } from "react";
import { UserModel } from "../../../metadata/user.model";
import { getAllUsers } from "../../../services/users.service";
import UserForm from "../UserForm";

export function UserList(): JSX.Element {
  const [users, setUsers] = useState<UserModel[]>([]);

  const loadUsers = async () => {
    try {
      const { data } = await getAllUsers<UserModel[]>();
      setUsers(data);
    } catch (err: any) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadUsers();
  });

  return (
    <Container>
      <Panel title="Exportar Relatório" style={{ marginBottom: "2em" }}>
        <UserForm />
      </Panel>
      <Panel title="Lista de Usuários">
        <UserTable dataSource={users} />
      </Panel>
    </Container>
  );
}
