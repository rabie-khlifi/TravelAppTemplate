import "react-native-reanimated";

import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawer from "@/components/CustomDrawer";
import { StyleSheet, Platform } from "react-native";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
       screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'front',
        swipeEdgeWidth: Platform.OS === 'android' ? 180 : undefined,
      }}
        drawerContent={(props) =><CustomDrawer {...props} />} // This is the custom drawer content component
      >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "settings",
            title: "settings",
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  drawerStyles: {
    width: 260,
    backgroundColor: 'transparent',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
})