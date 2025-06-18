import { useDrawerProgress } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const DrawerView = ({ children, style }: any) => {
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    return {
      transform: [{ scale }],
    };
  }); // Placeholder for drawer progress, replace with actual logic if needed
  return <Animated.View style={[styles.container, style, viewStyles]}>{children}</Animated.View>;
};

export default DrawerView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
