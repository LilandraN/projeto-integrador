import LoginForm from "../components/login/LoginForm";
import LoginLayout from "../components/ui/LoginLayout";

export default function Login(): JSX.Element {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}
