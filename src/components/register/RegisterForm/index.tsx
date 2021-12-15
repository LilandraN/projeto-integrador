import { Card as Panel, Form, Input, Button, Row, Col } from "antd";
import { Container } from "./styles";

export default function RegisterForm() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container>
      <Panel title="Cadastro de Usuários">
        <Form
          name="register"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                label="Nome do usuário"
                name="name1"
                rules={[
                  {
                    required: true,
                    message: "Preencha o nome do usuário",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Usuário"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Preencha o usuário",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Senha"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Preencha a senha",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Cargo"
                name="post"
                rules={[
                  {
                    required: true,
                    message: "Preencha o cargo",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Permissão do usuário"
                name="userRole"
                rules={[
                  {
                    required: true,
                    message: "Preencha a permissão do usuário",
                  },
                ]}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="end">
            <Col span={24}>
              <Form.Item name="button" style={{ textAlign: "end" }}>
                <Button type="primary" htmlType="submit">
                  Salvar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Panel>
    </Container>
  );
}
