import { Form, Button, Row, Col, DatePicker, Input } from "antd";
import { postUser } from "../../../services/register.service";

export default function UserForm() {
  const onFinish = (values: any) => {
    try {
      postUser(values);
    } catch (err: any) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
            label="Data Início"
            name="startDate"
            rules={[
              {
                required: true,
                message: "Preencha a data início",
              },
            ]}
          >
            <DatePicker style={{ width: "200px" }} format={"DD/MM/YYYY"} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Data Final"
            name="endDate"
            rules={[
              {
                required: true,
                message: "Preencha a data fim",
              },
            ]}
          >
            <DatePicker style={{ width: "200px" }} format={"DD/MM/YYYY"} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Código do Usuário"
            name="userId"
            rules={[
              {
                required: true,
                message: "Preencha o código do usuário",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="button">
            <Button type="primary" htmlType="submit">
              Processar Relatório
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
