import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

export function SignInButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}