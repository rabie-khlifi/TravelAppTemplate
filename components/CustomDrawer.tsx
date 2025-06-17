import { Colors } from "@/constants/Colors";
import { colors2, constant } from "@/constants/Constans";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDrawerProgress } from "@react-navigation/drawer";
import React, { useReducer } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";
//import { ProfileMenu, ProjectsArray } from "../arrays";
import DrawerItemList from "./DrawerItemList";
import { Image } from "expo-image";

type CustomDrawerProps = {
  label: string;
  onPress?: () => void;
  type: string;
  name: string;
  activeItemColor?: string;
  color: string;
};

const ProjectItem = ({ label, onPress, type, name, activeItemColor, color }: CustomDrawerProps) => {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, { backgroundColor: activeItemColor }]}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons type={type} name={"home-outline"} color={Colors[colorScheme].text} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

type ProfileItemProps = {
  label: string;
  onPress?: () => void;
  type: string;
  name: string;
};

const ProfileItem = ({ label, onPress, type, name }: ProfileItemProps) => {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, { margin: 50 }]}>
      <MaterialCommunityIcons type={type} name={"home-outline"} color={Colors[colorScheme].text} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

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
        <View style={styles.iconContainer}>
          <Image style={styles.profile} source={require('../assets/images/react-logo.png')} />
        </View>
        <Text style={styles.headerTitle}>Test Test</Text>
      </Animated.View>
      {/* Drawer List Item */}
      <Animated.View {...props} showsVerticalScrollIndicator={false} style={[styles.center, viewStyles]}>
        <DrawerItemList {...props} styles={styles} />
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
    backgroundColor: colors2.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
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
  label: {
    fontSize: constant.textFontSize,
    color: colors2.dark,
    paddingHorizontal: constant.SPACING,
  },
  notificationBadge: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
  iconContainer: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 2,
    backgroundColor: colors2.primary,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors2.darkGray,
    marginVertical: constant.SPACING / 2,
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: colors2.dark,
  },
  profile: {
    marginVertical: constant.SPACING / 2,
    marginRight: constant.SPACING,
    marginLeft: constant.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors2.light,
  },
  profileText: {
    color: colors2.dark,
  },
});
