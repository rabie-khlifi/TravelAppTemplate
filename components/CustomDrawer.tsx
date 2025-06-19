import { constant } from "@/constants/Constans";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { DrawerItemList, useDrawerProgress } from "@react-navigation/drawer";
import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";
//import { ProfileMenu, ProjectsArray } from "../arrays";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

//import DrawerItemList from "./DrawerItemList";
import { Colors } from "@/constants/Colors";

const CustomDrawer = (props: any) => {
  const colorScheme = useColorScheme() ?? "light";
  const { state, descriptors, navigation } = props;

  const [show, toggleProfile] = useReducer((s) => !s, false);

  const progress = useDerivedValue(() => {
    return show ? withTiming(1) : withTiming(0);
  });

  const menuStyles = useAnimatedStyle(() => {
    const scaleY = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      transform: [{ scaleY }],
    };
  });

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-200, 0]);
    return {
      transform: [{ translateX }],
    };
  });

  const viewStyles2 = (type: any) =>
    useAnimatedStyle(() => {
      const val = type === "top" ? -100 : 100;
      const translateY = interpolate(drawerProgress.value, [0, 1], [val, 0]);
      const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
      return {
        transform: [{ translateY }],
        opacity,
      };
    });

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Animated.View style={[styles.row, styles.view, styles.marginTop, viewStyles2("top")]}>
        <View style={styles.ProfileImageContainer}>
          <Image style={styles.profile} source={require("../assets/images/profile.jpg")} />
        </View>
        <View>
          <Text style={styles.headerTitle}>John doe</Text>
          <Text style={styles.ProfileStatus}>online</Text>
        </View>
      </Animated.View>
      {/* Drawer List Item */}
      <Animated.View {...props} showsVerticalScrollIndicator={false} style={[styles.center, styles.ItemList, viewStyles]}>
        <DrawerItemList {...props} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginHorizontal: 10,
    padding: 10,
  },
  ItemList: {
    marginHorizontal: 20,
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  marginTop: {
    marginTop: 20,
  },
  center: {
    flex: 1, // Take available space
    justifyContent: "center", // Center vertically
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: constant.SPACING / 2,
    justifyContent: "space-between",
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  ProfileImageContainer: {
    borderRadius: constant.borderRadius,
  },
  headerTitle: {
    fontSize: 24,
    color: Colors["dark"].text,
    fontFamily: "Roboto",
    fontWeight: "900",
  },
  ProfileStatus: {
    fontSize: 16,
    color: Colors["dark"].textLight,
    fontFamily: "Roboto",
  },
  profile: {
    marginVertical: 5,
    marginRight: 15,
    marginLeft: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
