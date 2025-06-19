import { FlatList, StyleSheet, View } from "react-native";

import CustomHeader, { HEADER_HEIGHT } from "@/components/CustomHeader";
import HorizontalCard from "@/components/HorisontalCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import VerticalCard from "@/components/VerticalCard";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
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
            renderItem={(card) => <HorizontalCard title={card.item.title} image={card.item.image} />}
          />
        </ThemedView>
        <ThemedView style={styles.subTitleContainer}>
          <ThemedText type="subtitle">Discover</ThemedText>
        </ThemedView>
        <FlatList
          data={list}
          style={{ marginTop: 20 }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          contentContainerStyle={{ paddingBottom: tabBarHeight, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={(card) => <VerticalCard description={card.item.description} title={card.item.title} image={card.item.image} />}
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
});
