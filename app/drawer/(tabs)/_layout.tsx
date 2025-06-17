import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault, // Inactive icon color
        headerShown: false,
        tabBarShowLabel: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: "absolute",
          borderRadius: 50,
          height: 70,
          borderTopWidth: 0,
          paddingTop: 10,
          backgroundColor: Colors[colorScheme ?? "light"].background, // custom background color
          ...Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            android: {
              // Use a solid background on Android
              elevation: 10,
            },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={30} name={focused ? "home" : "home-outline"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons size={30} name={focused ? "umbrella-beach" : "umbrella-beach-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons size={30} name={focused ? "cards-heart" : "cards-heart-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={30} name={focused ? "account" : "account-outline"} color={color} />,
        }}
      />
    </Tabs>
  );
}
