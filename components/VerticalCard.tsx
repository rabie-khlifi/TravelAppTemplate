import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { StyleSheet, useColorScheme } from "react-native";

type VerticalCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function VerticalCard({ title, description, image }: VerticalCardProps) {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <ThemedView style={styles.stepContainer}>
      <ThemedView style={[styles.cardContent, { backgroundColor: Colors[colorScheme].backgroundLight }]}>
        <ThemedText style={[styles.title, { color: Colors[colorScheme].text }]} type="title">
          {title}
        </ThemedText>
        <ThemedText style={[styles.description, { color: Colors[colorScheme].textLight }]} type="title">
          {description}
        </ThemedText>
      </ThemedView>
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
  },
  cardContent: {
    paddingLeft: 50,
    borderRadius: 15,
    height: 100,
    width: "100%",
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
