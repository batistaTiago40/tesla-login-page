import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function SignUpWith() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up With:</Text>

      <View style={styles.loginOptions}>

        <TouchableOpacity style={styles.iconBox}>
          <Image source={require("../../assets/google.png")} style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox}>
          <Image source={require("../../assets/apple.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBox}>
          <Image source={require("../../assets/facebook.png")} style={styles.icon}/>
        </TouchableOpacity>

      </View>
    </View>
  );
}