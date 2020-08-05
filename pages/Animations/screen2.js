import React, { useEffect, useState, useRef } from "react";
import { View, Image, KeyboardAvoidingView, StyleSheet, Text, FlatList, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";

export default function Screen2() {
  const data = [
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
    { nome: 'jean' },
    { nome: 'paul' },
    { nome: 'vale' },
  ]
  return (
    <KeyboardAvoidingView behavior='height' style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item, index) => String(item.nome + index)}
        data={data}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
        style={{ backgroundColor: 'red' }}
      />
      <View style={{ height: 80, padding: 16 }}>
        <TextInput style={{ height: 48, borderWidth: 2, padding: 10 }} />
      </View>
    </KeyboardAvoidingView>
  );
}

