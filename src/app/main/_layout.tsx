import { Slot, Tabs } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconEntypo from "react-native-vector-icons/Entypo";
import { View } from "react-native";
import AuthProvider from "../../contexts/AuthContext";
import { ToastProvider } from "react-native-toast-notifications";
import StoreProvider from "../../contexts/StoreContext";
import { Flex } from "../../styles/main.style";
import Header from "../../components/Header";

export default function MainLayout() {
  return (
    <ToastProvider successColor="#4db900dd" placement="top" duration={4000}>
      <AuthProvider>
        <StoreProvider>
          <Tabs>
            <Tabs.Screen
              name="index"
              options={{
                title: "My Food",
                tabBarIcon: () => (
                  <Icon name="home" color="#e7562aff" size={28} />
                ),
                tabBarShowLabel: false,
                tabBarLabelStyle: {
                  color: "#e7562aff",
                },
                headerTitleAlign: "center",
                headerTintColor: "#e7562aff",
                header: (p) => <Header {...p.options} />,
              }}
            />
            <Tabs.Screen
              name="stores/index"
              options={{
                title: "Lojas",
                tabBarShowLabel: false,
                headerTintColor: "#e7562aff",
                tabBarIcon: () => (
                  <IconEntypo name="shop" color="#e7562aff" size={28} />
                ),
              }}
            />
            <Tabs.Screen
              name="products/index"
              options={{
                title: "Lanches",
                tabBarShowLabel: false,
                headerTintColor: "#e7562aff",
                tabBarIcon: () => (
                  <Icon name="fast-food-sharp" color="#e7562aff" size={28} />
                ),
              }}
            />
            <Tabs.Screen
              name="stores/[id]/index"
              options={{
                href: null,
                headerShown: false,
                tabBarShowLabel: false,
              }}
            />

            <Tabs.Screen
              name="products/[id]/index"
              options={{
                href: null,
                headerShown: false,
                tabBarShowLabel: false,
              }}
            />
            <Tabs.Screen
              name="profile/index"
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: () => (
                  <IconEntypo name="user" color="#e7562aff" size={28} />
                ),
              }}
            />
            <Tabs.Screen
              name="cart/index"
              options={{
                title: "Sacola",
                headerTintColor: "#e7562aff",
                href: null,
                tabBarShowLabel: false,
              }}
            />
            <Tabs.Screen
              name="cart/finish/index"
              options={{
                href: null,
                headerShown: false,
                tabBarShowLabel: false,
              }}
            />
          </Tabs>
        </StoreProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
