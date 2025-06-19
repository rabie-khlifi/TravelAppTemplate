import { Colors } from "@/constants/Colors";
import { useDrawerProgress } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const DrawerView = ({ children, style }: any) => {
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);
    return {
      transform: [{ scale }],
      borderRadius,
    };
  });
  const cardStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [0.8, 0.7]);
    const position = interpolate(drawerProgress.value, [0, 1], [-10, -50]);
    return {
      transform: [{ scale }],
      left: position,
    };
  });
  return (
    <Animated.View style={styles.wrapper}>
      <Animated.View style={[styles.dropCard, cardStyles]} />
      <Animated.View style={[styles.container, style, viewStyles]}>{children}</Animated.View>
    </Animated.View>
  );
};

export default DrawerView;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "hidden",
    elevation: 4,
  },
  dropCard: {
    position: "absolute",
    elevation: 4,
    flex: 1,
    backgroundColor: Colors["dark"].textLight,
    borderRadius: 40,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
