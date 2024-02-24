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
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../../validations/auth.validation";
import { useAuth } from "../../contexts/AuthContext";
import { LoginRequest } from "../../types/contexts";

export default function Login() {
  const { singIn } = useAuth();
  const { register, setValue, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginValidation),
  });

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  useEffect(() => {
    reset();
  }, []);
  
  const handleLogin = (value: LoginRequest) => {
    singIn(value);
  };

  return (
    <FormBox>
      <AuthTitle>Login</AuthTitle>
      <AuthSubtitle>Seja bem-vindo de volta</AuthSubtitle>
      <Input
        label="Email:"
        placeholder="digite seu email..."
        keyboardType="email-address"
        onChangeText={(text) => setValue("email", text)}
      />
      <Input
        label="Senha:"
        placeholder="digite sua senha..."
        onChangeText={(text) => setValue("password", text)}
      />

      <AuthButton onPress={handleSubmit(handleLogin)}>
        <Text style={{ textAlign: "center", color: "#fff" }}>Entrar</Text>
      </AuthButton>

      <AuthFormDivider />

      <Text style={{ textAlign: "center" }}>
        Não tem uma conta? <AuthLink href="/register">Cadastre-se</AuthLink>
      </Text>
    </FormBox>
  );
}
