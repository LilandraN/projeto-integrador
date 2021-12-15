
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
  //   const [areas, setAreas] = useState<AreaModel[]>([]);
  //   const [selectedRowKeys, setSelectKeys] = useState<Key[]>([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const handleLoadingDebounce = (value: boolean) => {
  //     setIsLoading(value);
  //   };
  //   const refresh = async () => {
  //     try {
  //       setIsLoading(true);
  //       const { data } = await getAllAreas<AreaGetResponse>();
  //       setAreas(data.items);
  //     } catch (err) {
  //       sendErrorNotification(
  //         "Erro na consulta de Áreas",
  //         "Não foi possível listar as áreas."
  //       );
  //     }
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     refresh();
  //   }, []);

  //   const onSelectChange = (selectedRowKey: Key[]) => {
  //     setSelectKeys(selectedRowKey);
  //   };

  //   const onSearch = async (value: string) => {
  //     if (value === "") {
  //       await refresh();
  //       return;
  //     }
  //     try {
  //       const { data } = await getAreaWithSearch<AreaGetResponse>(value);
  //       setAreas(data.items);
  //     } catch (err) {
  //       sendErrorNotification(
  //         "Erro na consulta de Áreas",
  //         "Não foi possível listar as áreas."
  //       );
  //     }
  //   };

  //   const handleDelete = async () => {
  //     const promises: Promise<void>[] = [];
  //     selectedRowKeys.forEach((selectedItem) => {
  //       promises.push(delArea(String(selectedItem)));
  //     });

  //     try {
  //       await Promise.all(promises);
  //     } catch (err) {
  //       sendErrorNotification(
  //         "Sem permissão de acesso",
  //         "Usuário sem permissão de acesso a essa funcionalidade."
  //       );
  //       setSelectKeys([]);
  //       return;
  //     }

  //     await refresh();
  //     setSelectKeys([]);
  //   };

  //   const rowSelection = {
  //     selectedRowKeys,
  //     onChange: onSelectChange,
  //   };
  //   const hasSelected = selectedRowKeys.length > 0;

  return (
    <Container>
      <Panel title="Usuários">
        {/* {!hasSelected && (
          <Toolbar>
            <Search
              placeholder="Buscar"
              onSearch={onSearch}
              handleLoading={handleLoadingDebounce}
            />
            <ButtonContainer>
              <AreaModal
                isEdit={false}
                area={{ id: "", name: "", branches: [], type: "0" }}
                refresh={refresh}
              />
            </ButtonContainer>
          </Toolbar>
        )}

        {hasSelected && (
          <ToolbarListScreen selectedRowKeys={selectedRowKeys as string[]}>
            <ButtonGroup>
              <ButtonModalConfirm
                icon={<DeleteOutlined />}
                modalType="negative"
                modalTitle="Excluir Área"
                modalFirstMessage="Ao confirmar a exclusão você irá perder todas as informações da área."
                modalSecondMessage="Deseja excluir a área?"
                clickAction={handleDelete}
                type="secundary"
              >
                Excluir itens
              </ButtonModalConfirm>
              <Button
                icon={<ClearOutlined />}
                onClick={() => setSelectKeys([])}
                type="secundary"
              >
                Limpar seleção
              </Button>
            </ButtonGroup>
          </ToolbarListScreen>
        )} */}
        <UserTable
          dataSource={users}
          //   rowSelection={rowSelection}
          //   refresh={refresh}
          //   loading={isLoading}
        />
      </Panel>
    </Container>
  );
}
