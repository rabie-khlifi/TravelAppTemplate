import { FlatList, StyleSheet, View } from "react-native";

import CustomHeader, { HEADER_HEIGHT } from "@/components/CustomHeader";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const cards = [
    {
      id: "1",
      title: "Alaska",
      image: "https://images.pexels.com/photos/26618535/pexels-photo-26618535.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
    {
      id: "2",
      title: "Marari",
      image: "https://images.pexels.com/photos/13354560/pexels-photo-13354560.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
    {
      id: "3",
      title: "Gokarna",
      image: "https://images.pexels.com/photos/30873476/pexels-photo-30873476.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
  ];
  const list = [
    {
      id: "1",
      title: "Alaska",
      description: "Explore the breathtaking landscapes of Alaska, from glaciers to wildlife.",
      image: "https://images.pexels.com/photos/26618535/pexels-photo-26618535.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
    {
      id: "2",
      title: "Marari",
      description: "Relax on the serene beaches of Marari, known for its tranquil atmosphere.",
      image: "https://images.pexels.com/photos/13354560/pexels-photo-13354560.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
    {
      id: "3",
      title: "Gokarna",
      description: "Discover the hidden gems of Gokarna, a coastal town with stunning beaches.",
      image: "https://images.pexels.com/photos/30873476/pexels-photo-30873476.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
    {
      id: "4",
      title: "Gokarna",
      description: "Discover the hidden gems of Gokarna, a coastal town with stunning beaches.",
      image: "https://images.pexels.com/photos/30873476/pexels-photo-30873476.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
    {
      id: "5",
      title: "Gokarna",
      description: "Discover the hidden gems of Gokarna, a coastal town with stunning beaches.",
      image: "https://images.pexels.com/photos/30873476/pexels-photo-30873476.jpeg?auto=compress&cs=tinysrgb&h=800&w=600",
    },
  ];
  return (
    <>
      <CustomHeader title="HOME" />
      <ThemedView style={[styles.container, { paddingTop: insets.top + HEADER_HEIGHT }]}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Find</ThemedText>
          <ThemedText type="title">Beautiful world</ThemedText>
        </ThemedView>
        <ThemedView>
          <FlatList
            style={{ marginVertical: 25 }}
            horizontal
            data={cards}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsHorizontalScrollIndicator={false}
            renderItem={(card) => {
              return (
                <ThemedView style={styles.stepContainer}>
                  <ThemedView style={{ height: 240, width: 150 }}>
                    <Image source={{ uri: card.item.image }} style={{ width: "100%", height: "100%" }} />
                    <LinearGradient
                      // Background Linear Gradient
                      colors={["transparent", "transparent", "#007BA180"]}
                      //TODO: look how to change the gradient position
                      style={styles.cardBackground}
                    />
                    <ThemedText style={styles.title} type="title">
                      {card.item.title}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>
              );
            }}
          />
        </ThemedView>
        <ThemedView style={styles.subTitleContainer}>
          <ThemedText type="subtitle">Discover</ThemedText>
        </ThemedView>
        <FlatList
          data={list}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          contentContainerStyle={{ paddingBottom: tabBarHeight, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={(card) => {
            return (
              <ThemedView style={styles.stepContainer}>
                <ThemedView style={{ height: 100, width: "100%", backgroundColor: Colors["dark"].icon }}>
                  <ThemedView style={styles.listImage}>
                    <Image source={{ uri: card.item.image }} style={{ width: "100%", height: "100%" }} />
                  </ThemedView>
                  <ThemedText style={styles.title} type="title">
                    {card.item.title}
                  </ThemedText>
                  <ThemedText style={styles.title} type="title">
                    {card.item.description}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            );
          }}
        />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 25,
    paddingHorizontal: 16,
  },
  subTitleContainer: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
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
  listImage: {
    overflow: "hidden",
    height: "90%",
    width: 50,
    borderRadius: 15,
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -0.5 * 0.9 * 100 }], // 0.9 * 100 = 90% of parent height, so -45 to center
  },
});
