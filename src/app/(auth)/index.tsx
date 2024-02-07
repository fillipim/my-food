import { router } from "expo-router";
import { Input } from "../../components/Input";
import {
  AuthButton,
  AuthFormDivider,
  AuthLink,
  AuthSubtitle,
  AuthTitle,
  FormBox,
} from "../../styles/auth.style";
import { Text } from "react-native";

export default function Login() {

  const handleLogin = () => {
    router.push("/main");
  }

  return (
    <FormBox>
      <AuthTitle>Login</AuthTitle>
      <AuthSubtitle>Seja bem-vindo de volta</AuthSubtitle>
      <Input
        label="Email:"
        placeholder="digite seu email..."
        keyboardType="email-address"
      />
      <Input label="Senha:" placeholder="digite sua senha..." />

      <AuthButton onPress={handleLogin}>
        <Text style={{ textAlign: "center", color: "#fff" }}>Entrar</Text>
      </AuthButton>

      <AuthFormDivider />

      <Text style={{ textAlign: "center" }}>
        Não tem uma conta? <AuthLink href="/register">Cadastre-se</AuthLink>
      </Text>
    </FormBox>
  );
}
