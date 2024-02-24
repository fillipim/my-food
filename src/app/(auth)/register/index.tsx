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
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext";
import { registerValidation } from "../../../validations/auth.validation";
import { RegisterRequest } from "../../../types/contexts";

export default function Register() {
  const { singUp } = useAuth();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });
  123;

  useEffect(() => {
    register("name");
    register("email");
    register("password");
    register("passwordConfirmation");
  }, [register]);

  const handleRegister = (value: any) => {
    delete value.passwordConfirmation;
    singUp(value);
  };

  console.log(errors);

  return (
    <FormBox>
      <AuthTitle>Cadastre-se</AuthTitle>
      <AuthSubtitle>Seja bem-vindo</AuthSubtitle>
      <Input
        label="Nome:"
        placeholder="digite seu nome..."
        onChangeText={(text) => setValue("name", text)}
      />
      <Input
        label="Email:"
        placeholder="digite seu email..."
        onChangeText={(text) => setValue("email", text)}
      />
      <Input
        label="Senha:"
        placeholder="digite sua senha..."
        onChangeText={(text) => setValue("password", text)}
      />
      <Input
        label="Confirma senha:"
        placeholder="digite sua senha novamente..."
        onChangeText={(text) => setValue("passwordConfirmation", text)}
      />

      <AuthButton onPress={handleSubmit(handleRegister)}>
        <Text style={{ textAlign: "center", color: "#fff" }}>Cadastrar</Text>
      </AuthButton>

      <AuthFormDivider />

      <Text style={{ textAlign: "center" }}>
        Já possui uma conta? <AuthLink href="/">Faça login</AuthLink>
      </Text>
    </FormBox>
  );
}
