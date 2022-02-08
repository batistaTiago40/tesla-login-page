import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Labels() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.inputText}>Email:</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.inputText}>Senha:</Text>
      <TextInput style={styles.input}/>
    </View>
  );
}