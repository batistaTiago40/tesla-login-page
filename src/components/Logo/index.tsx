import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles"

export default function Logo() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../../assets/tesla.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Tesla</Text>

    </View>
  );
}
