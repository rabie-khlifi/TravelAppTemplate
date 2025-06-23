import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import DrawerView from "@/components/DrawerView";
import { HapticTab } from "@/components/HapticTab";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <DrawerView>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault, // Inactive icon color
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: HapticTab,
          tabBarStyle: {
            position: "absolute",
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            height: 70,
            borderTopWidth: 0.5,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            paddingTop: 10,
            borderColor: Colors[colorScheme ?? "light"].border, // custom border color
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
            title: "favorites",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons size={30} name={focused ? "cards-heart" : "cards-heart-outline"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={30} name={focused ? "account" : "account-outline"} color={color} />,
          }}
        />
      </Tabs>
    </DrawerView>
  );
}
