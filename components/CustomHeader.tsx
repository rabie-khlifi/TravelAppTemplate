import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Changed to MaterialCommunityIcons
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HEADER_HEIGHT = 56;

type CustomHeaderProps = {
  title?: string;
  type?: "drawer" | "back";
  onSearchPress?: () => void;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, type = "drawer", onSearchPress }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const handleLeftPress = () => {
    if (type === "drawer") {
      // @ts-ignore
      navigation.openDrawer && navigation.openDrawer();
    } else {
      navigation.goBack && navigation.goBack();
    }
  };

  return (
    <ThemedView style={[styles.container, { top: insets.top }]}>
      <TouchableOpacity onPress={handleLeftPress} style={styles.iconButton}>
        <MaterialCommunityIcons name={type === "drawer" ? "menu" : "arrow-left"} size={28} color={Colors[colorScheme ?? "light"].text} />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <ThemedText type="title" numberOfLines={1} style={styles.title}>
          {title}
        </ThemedText>
      </View>
      <TouchableOpacity onPress={onSearchPress} style={styles.iconButton} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <MaterialCommunityIcons name="magnify" size={26} color={Colors[colorScheme ?? "light"].text} />
      </TouchableOpacity>
    </ThemedView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    paddingTop: 10,
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 4,
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
});
