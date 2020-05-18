import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Dimensions, Animated, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const [width, setWidth] = useState(Dimensions.get('window').width)
  const [height, setHeight] = useState(Dimensions.get('window').height)
  const fadeAnimWidth = useRef(new Animated.Value(width)).current;
  const fadeAnimHeight = useRef(new Animated.Value(height)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.sequence([
      Animated.timing(fadeAnimWidth, {
        toValue: 200,
        duration: 1000
      }),
      Animated.timing(fadeAnimHeight, {
        toValue: 200,
        duration: 1000
      })
    ]).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnimWidth, {
      toValue: 200,
      duration: 400
    }).start();
    Animated.timing(fadeAnimHeight, {
      toValue: 200,
      duration: 400
    }).start();
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <TouchableNativeFeedback onPressIn={fadeIn} onPressOut={fadeOut}>
        <Animated.Image
          style={{ height: fadeAnimHeight, width: fadeAnimWidth }}
          resizeMode={'contain'}
          source={{
            uri: 'https://images.unsplash.com/photo-1589729306025-c433a3c53a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          }} />
      </TouchableNativeFeedback>
    </View>
  );
}
