import { Stack } from "expo-router";

export default function LayoutAuth() {
  return (
    <Stack
      screenOptions={{
        animation: "ios",
        contentStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register/index" options={{title: "Cadastro" }} />
    </Stack>
  );
}
