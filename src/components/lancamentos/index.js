import React from "react";
import {View, StyleSheet, Text} from "react-native";

export default function Lancamentos() {
    return (
    <View style={estilo.containerDest}>
        <Text style={estilo.dest}>Próximos lançamentos</Text>
    </View>
    )
}

const estilo = StyleSheet.create({
    dest: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    containerDest: {
        marginLeft: 20,
        marginTop: 20,
        padding: 5
    }
})
