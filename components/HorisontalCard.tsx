import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { DimensionValue, StyleSheet, TouchableNativeFeedback } from "react-native";

type HorizontalCardProps = {
  title: string;
  image: string;
  height?: DimensionValue;
  width?: DimensionValue;
  handlePress?: () => void;
};
const HorizontalCard = ({ title, image, height = 240, width = 150, handlePress }: HorizontalCardProps) => {
  return (
    <TouchableNativeFeedback onPress={handlePress} useForeground={true} background={TouchableNativeFeedback.Ripple("#007BA130", true)}>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={{ height, width }}>
          <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />
          <LinearGradient colors={["transparent", "transparent", "#007BA180"]} style={styles.cardBackground} />
          <ThemedText style={styles.title} type="title">
            {title}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableNativeFeedback>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  stepContainer: {
    borderRadius: 15,
    overflow: "hidden",
  },
  title: {
    position: "absolute",
    bottom: 12,
    left: 12,
    color: Colors["dark"].text,
    fontSize: 20,
  },
  cardBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
