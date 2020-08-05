import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Card from "../../components/Card";
import { Actions } from "react-native-router-flux";

export default function Home() {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Card
        onPress={() => Actions.screen1()}
        image='https://source.unsplash.com/random/?animation'
        title='Animação'
        subTitle='Animando dois retangulos criados em SVG'
      />
      <Card
        onPress={() => Actions.screen2()}
        image='https://source.unsplash.com/random/?text'
        title='TextInput'
        subTitle='Testando o TextInput com FlatList'
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});
