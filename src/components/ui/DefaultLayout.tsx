import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { MenuOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, LayoutProps as AntdLayoutProps } from "antd";

const { Sider } = Layout;

interface LayoutProps extends AntdLayoutProps {
  isBlocked?: boolean;
}

function DefaultLayout({
  children,
  isBlocked = false,
  ...rest
}: LayoutProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);

  const { pathname } = useLocation();
  const highlightedKey = pathname.substring(1);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }} {...rest}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Button
            type="text"
            onClick={onCollapse}
            style={{
              width: "100%",
              color: "#fff",
              margin: " 4px",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <MenuOutlined style={{ fontSize: "16px" }} />
          </Button>
          {!isBlocked && (
            <Menu
              selectedKeys={[highlightedKey]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="">
                <Link to="/">Lista de Usuários</Link>
              </Menu.Item>
              <Menu.Item key="register">
                <Link to="/register">Cadastro de Usuários</Link>
              </Menu.Item>
            </Menu>
          )}
        </Sider>
        <Layout>{children}</Layout>
      </Layout>
    </>
  );
}

export default DefaultLayout;
