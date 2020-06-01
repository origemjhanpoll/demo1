import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Dimensions, TouchableOpacity, FlatList, TouchableNativeFeedback, Text, StyleSheet, } from 'react-native';


export default function App() {
  const [width, setWidth] = useState(Dimensions.get('window').width)
  const [height, setHeight] = useState(Dimensions.get('window').height)
  const [animation, setAnimation] = useState(false)
  const uri = useRef('https://images.unsplash.com/photo-1590962677400-f97466952836?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80').current

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={{ width: width, height: 300 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 8
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

