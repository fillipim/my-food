import { Text } from "react-native";
import { Input } from "../../../components/Input";
import {
  FormBox,
  AuthTitle,
  AuthSubtitle,
  AuthButton,
  AuthFormDivider,
  AuthLink,
} from "../../../styles/auth.style";

export default function Register() {
  return (
    <FormBox>
      <AuthTitle>Cadastre-se</AuthTitle>
      <AuthSubtitle>Seja bem-vindo</AuthSubtitle>
      <Input label="Nome:" placeholder="digite seu nome..." />
      <Input label="Email:" placeholder="digite seu email..."  />
      <Input label="Senha:" placeholder="digite sua senha..." />
      <Input label="Confirma senha:" placeholder="digite sua senha novamente..." />

      <AuthButton>
        <Text style={{ textAlign: "center", color: "#fff" }}>Cadastrar</Text>
      </AuthButton>

      <AuthFormDivider />

      <Text style={{ textAlign: "center" }}>
        Já possui uma conta? <AuthLink href="/">Faça login</AuthLink>
      </Text>
    </FormBox>
  );
}
