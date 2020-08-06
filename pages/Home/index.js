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
        title='Animatable'
        subTitle='Animando dois retangulos criados em SVG'
      />
      <Card
        onPress={() => Actions.screen2()}
        image='https://source.unsplash.com/random/?text'
        title='TextInput'
        subTitle='Testando o TextInput com FlatList'
      />
      <Card
        onPress={() => Actions.screen3()}
        image='https://source.unsplash.com/random/?Animation'
        title='Animated'
        subTitle='Testando a api de animação'
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
