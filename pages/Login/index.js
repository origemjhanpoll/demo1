import React, { useEffect, useState, useRef } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Actions } from "react-native-router-flux";

export default function Login() {
  return (
    <TouchableOpacity style={styles.container} onPress={() => Actions.home()}>
      <Text>Login</Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
