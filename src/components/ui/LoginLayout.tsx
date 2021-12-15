import { Layout, LayoutProps } from "antd";
import { Content } from "antd/lib/layout/layout";

export default function LoginLayout({
  children,
  ...rest
}: LayoutProps): JSX.Element {
  return (
    <>
      <Layout style={{ minHeight: "100vh", display: "flex" }} {...rest}>
        <Content
          style={{
            marginTop: "16em",
            marginLeft: "12em",
            marginRight: "12em",
            justifyContent: "center",
          }}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
}
