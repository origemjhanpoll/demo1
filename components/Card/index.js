import React, { useRef } from "react";
import { View, Image, Dimensions, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useFonts, Inter_900Black, Inter_200ExtraLight } from '@expo-google-fonts/inter';

const width = Dimensions.get("window").width

export default function ({
  onPress,
  image,
  title = title || 'Title',
  subTitle = subTitle || 'SubTitle here!'
}) {
  const uri = useRef("https://source.unsplash.com/random").current;
  const [fontsLoaded] = useFonts({ Inter_900Black, Inter_200ExtraLight });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <TouchableOpacity onPress={onPress ? onPress : null} style={styles.Card}>
        <Image source={{ uri: image ? image : uri }} style={styles.Image} />
        <View style={styles.AjustText}>
          <Text style={styles.Font1}>{title}</Text>
          <Text numberOfLines={2} style={styles.Font2}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 20,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Image: {
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  AjustText: {
    flex: 1,
    paddingHorizontal: 16,
  },
  Font1: {
    fontFamily: 'Inter_900Black',
    fontSize: 22,
  },
  Font2: {
    fontFamily: 'Inter_200ExtraLight',
    fontSize: 16,
  }
});
