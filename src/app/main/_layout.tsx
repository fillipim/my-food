import { Tabs } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Container } from "../../styles/main.style";

export default function MainLayout() {
  return (
    <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "My Food",
            tabBarIcon: () => <Icon name="home" color="#e7562aff" size={28} />,
            tabBarShowLabel: false,
            tabBarLabelStyle: {
              color: "#e7562aff",
            },
            headerTitleAlign: "center",
            headerTintColor: "#e7562aff",
          }}
        />
    </Tabs>
  );
}
