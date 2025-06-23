import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { DimensionValue, StyleSheet, TouchableNativeFeedback, useColorScheme } from "react-native";

type VerticalCardProps = {
  title: string;
  description: string;
  image: string;
  height?: DimensionValue;
  width?: DimensionValue;
  handlePress?: () => void;
};

export default function VerticalCard({ title, description, image, height = 100, width = "100%", handlePress }: VerticalCardProps) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <ThemedView style={styles.stepContainer}>
      <TouchableNativeFeedback  onPress={handlePress} useForeground={true} background={TouchableNativeFeedback.Ripple("#007BA130", true)}>
        <ThemedView style={[styles.cardContent, { backgroundColor: Colors[colorScheme].backgroundLight, height, width }]}>
          <ThemedText style={[styles.title, { color: Colors[colorScheme].text }]} type="title">
            {title}
          </ThemedText>
          <ThemedText style={[styles.description, { color: Colors[colorScheme].textLight }]} type="title">
            {description}
          </ThemedText>
        </ThemedView>
      </TouchableNativeFeedback>
      <ThemedView style={styles.listImage}>
        <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 10,
    paddingLeft: 30,
    overflow: "hidden",
  },
  cardContent: {
    paddingLeft: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
  listImage: {
    overflow: "hidden",
    height: "80%",
    width: 60,
    borderRadius: 15,
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -0.5 * 0.8 * 100 }],
  },
  title: {
    color: Colors["light"].text,
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 15,
  },
});
