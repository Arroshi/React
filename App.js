import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";
import { Styles } from "./src/components/Styles";
import { Header } from "./src/components/Header";
import { LatBar } from "./src/components/LatBar";

export default function App() {
  return (
    <View style={Styles.default}>
      <Main></Main>

      <StatusBar style="auto" />
    </View>
  );
}
