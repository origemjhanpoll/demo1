import React, { useEffect, useState, useRef } from "react";
import { View, Image, TouchableWithoutFeedback, StyleSheet, Text, } from "react-native";
import { Actions } from "react-native-router-flux";
import * as Animatable from 'react-native-animatable';


const AnimatableButton = Animatable.createAnimatableComponent(TouchableWithoutFeedback)

export default function Screen1() {
  const ButtonRef = useRef();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => ButtonRef.current.bounce()}
      >
        <Animatable.View style={styles.button}
          useNativeDriver
          ref={ButtonRef}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>animatable</Text>
        </Animatable.View>
      </TouchableWithoutFeedback >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#369856',
    borderRadius: 8,
    width: 200
  }
});
