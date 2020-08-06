import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const Screen3 = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeContin = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 1,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 0.4,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const continous = () => {
    Animated.decay(fadeContin, {
      velocity: 2000,
      // deceleration: 0.5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ height: 20, backgroundColor: 'cyan', width: fadeContin, }} />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            transform: [{ scale: fadeAnim }]  // Bind opacity to animated value
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
        <Button title="Continous" onPress={continous} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  }
});

export default Screen3;