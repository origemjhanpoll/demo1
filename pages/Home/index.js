import React, { useState, useRef } from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

export default function Home() {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const uri = useRef(
    "https://images.unsplash.com/photo-1590962677400-f97466952836?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  ).current;

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={{ width: width, height: 300 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
