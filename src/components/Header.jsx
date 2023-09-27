import React from "react";
import { View, Text, Button } from "react-native";
import { Styles } from "./Styles";

const Header = () =>{
    return (
        <View style={Styles.header_h}>
            <Text style={Styles.menu_sections}>asd</Text>
            <Text style={[Styles.menu_sections, Styles.pointer]}>qwe</Text>
        </View>
        // <View style={style_h.header_h}>
        //     <Text style={style_h.menu_sections}>asd</Text>
        //     <Text style={style_h.menu_sections}>dsa</Text>            
        // </View>
    )
}


export {Header};