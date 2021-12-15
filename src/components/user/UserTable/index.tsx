import { Table as TableAntd, TableProps as TableAntdProps } from "antd";
import { ColumnType } from "antd/lib/table";

interface TableProps extends TableAntdProps<any> {
  dataSource: readonly any[];
}

export default function UserTable({
  dataSource,
  ...rest
}: TableProps): JSX.Element {
  const columns: ColumnType<any>[] = [
    {
      title: "Codigo do Usuário",
      dataIndex: "userId",
      key: "id",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      title: "Nome do Usuário",
      dataIndex: "name",
      key: "id",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Usuário",
      dataIndex: "username",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: "Cargo",
      dataIndex: "post",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.post.localeCompare(b.post),
    },
  ];

  return (
    <TableAntd
      rowKey="id"
      columns={columns}
      dataSource={dataSource}
      {...rest}
    />
  );
}
