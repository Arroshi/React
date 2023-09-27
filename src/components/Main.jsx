import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Boton1, Boton2 } from "./Button";
import { Header } from "./Header";
import { Styles } from "./Styles";
import { LatBar } from "./LatBar";
import { Content } from "./Content";


const Main = () => {
    return (
        <View>      
            <Header></Header>
            <View style={Styles.d_flex}>
                <LatBar></LatBar>
                <Content></Content>
            </View>
        </View>
    )
}

export default Main