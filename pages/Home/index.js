import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Card from "../../components/Card";
import { Actions } from "react-native-router-flux";

export default function Home() {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Card
        onPress={() => Actions.animation1()}
        image='https://images.unsplash.com/photo-1542202024422-83d20d29efff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        title='Animação'
        subTitle='Animando dois retangulos criados em SVG'
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
