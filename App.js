import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Dimensions, Animated, TouchableOpacity, FlatList, TouchableNativeFeedback } from 'react-native';

export default function App() {
  const [width, setWidth] = useState(Dimensions.get('window').width)
  const [height, setHeight] = useState(Dimensions.get('window').height)
  const fadeAnimWidth = useRef(new Animated.Value(width)).current;
  const fadeAnimHeight = useRef(new Animated.Value(height)).current;
  const [animation, setAnimation] = useState(false)
  const [saveIndex, setSaveIndex] = useState(null)

  const data = [
    { uri: 'https://images.unsplash.com/photo-1589729306025-c433a3c53a64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
    { uri: 'https://images.unsplash.com/photo-1589780416490-904aa1b3d242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
  ]
  useEffect(() => {
    if (animation) {
      Animated.timing(fadeAnimHeight, {
        toValue: height,
        duration: 400
      }).start();
    } else {
      Animated.timing(fadeAnimHeight, {
        toValue: height / 3,
        duration: 400
      }).start();
    }
  }), [animation];


  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => 'key' + index}
      renderItem={({ item, index }) =>
        <TouchableNativeFeedback onPress={() => [setAnimation(!animation), setSaveIndex(index)]}>
          <Animated.Image
            style={saveIndex == index ?
              { height: fadeAnimHeight, width: width, }
              :
              { height: height / 3, width: width, }
            }
            source={{
              uri: item.uri
            }} />
        </TouchableNativeFeedback>
      }
    />
  );
}
