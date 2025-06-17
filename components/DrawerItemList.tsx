import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { colors2 } from "@/constants/Constans";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type DrawerItemProps = {
  label: string;
  onPress: () => void;
  tabBarTestID?: string;
  type?: string;
  name?: string;
  notification?: number;
  activeItemColor?: string | null;
  color?: string;
  styles: any;
};

const DrawerItem: React.FC<DrawerItemProps> = ({ label, onPress, tabBarTestID, type, name, activeItemColor, color, styles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, { backgroundColor: activeItemColor }]}
    >
      <View style={styles.row}>
        <Text style={[styles.label, { color: color }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
interface test {
  state: any;
  descriptors: any;
  navigation: any;
  styles: any;
}
const DrawerItemList = ({ state, descriptors, navigation, styles }: test) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const drawerItem = options.item;
        const color = isFocused ? colors2.dark : colors2.darkGray;
        const activeItemColor = isFocused ? colors2.primary : null;

        return (
          <DrawerItem
            key={index}
            label={"test"}
            tabBarTestID={options.tabBarTestID}
            onPress={() => {}}
            name={"drawerItem.icon"}
            type={"drawerItem.type"}
            color={color}
            activeItemColor={activeItemColor}
            styles={styles}
          />
        );
      })}
    </View>
  );
};

export default DrawerItemList;
