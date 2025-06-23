// app/(drawer)/(tabs)/details/[id].tsx
import CustomHeader from "@/components/CustomHeader";
import { ThemedView } from "@/components/ThemedView";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const image = "https://images.pexels.com/photos/26618535/pexels-photo-26618535.jpeg?auto=compress&cs=tinysrgb&h=2000&w=2000";
  return (
    <>
      <CustomHeader type="back" />
      <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={{ uri: image }} style={{ width: "100%", height: "100%" }} />
      </ThemedView>
    </>
  );
}
