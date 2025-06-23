import "react-native-reanimated";

import CustomDrawer from "@/components/CustomDrawer";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Drawer } from "expo-router/drawer";
import { Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.safeArea}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#007BA1", "#004F6E", "#00293C"]}
          style={styles.background}
        />
        <Drawer
          screenOptions={{
            drawerStyle: styles.drawerStyles,
            sceneStyle: styles.sceneStyle,
            drawerActiveTintColor: Colors["dark"].text,
            drawerActiveBackgroundColor: "transparent",
            drawerInactiveTintColor: Colors["dark"].textLight,
            drawerLabelStyle: {
              fontSize: 20,
              fontFamily: "Roboto",
              fontWeight: "700",
            },
            drawerType: "slide",
            overlayColor: "transparent",
            swipeEdgeWidth: Platform.OS === "android" ? 80 : undefined,
          }}
          drawerContent={(props) => <CustomDrawer {...props} />} // This is the custom drawer content component
        >
          <Drawer.Screen
            name="(tabs)" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Home",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Destination"
            options={{
              drawerLabel: "Destination",
              title: "Destination",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="AddTrip"
            options={{
              drawerLabel: "Add Trip",
              title: "Add Trip",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Messages"
            options={{
              drawerLabel: "Messages",
              title: "Messages",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Profile"
            options={{
              drawerLabel: "Profile",
              title: "Profile",
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
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  drawerStyles: {
    width: 240,
    backgroundColor: "transparent",
  },
  sceneStyle: {
    backgroundColor: "transparent",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
