import React, { useState, useRef } from "react";
import { View, Image, Dimensions, StyleSheet, Text, StatusBar } from "react-native";
import { useFonts, Inter_900Black, Inter_200ExtraLight } from '@expo-google-fonts/inter';
import { AppLoading } from 'expo';


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Home() {
  const uri = useRef("https://source.unsplash.com/random").current;
  const [fontsLoaded] = useFonts({ Inter_900Black, Inter_200ExtraLight });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.Card}>
          <Text style={styles.Font1}>Title</Text>
          <Text style={styles.Font2}>SubTitle in Performace</Text>
          <Image source={{ uri: uri }} style={styles.Image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Card: {
    borderRadius: 48,
    height: height,
    width: width,
  },
  Image: {
    backgroundColor: '#E8E8E8',
    borderTopRightRadius: 48,
    borderTopLeftRadius: 48,
    flex: 1,
    width: null,
    height: null,
  },
  Font1: {
    fontFamily: 'Inter_900Black',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 4,
  },
  Font2: {
    fontFamily: 'Inter_200ExtraLight',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 14,
  }
});
