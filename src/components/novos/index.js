import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

// Criando a função e recebendo por props o titulo valor e imagem do jogo

export default function Novos({titulo, valor, imagem}) {
    
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>

       
    );
}

const estilo = StyleSheet.create({
    containerJogos: {
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "left",
        justifyContent: "space-between",
        width: 450,
        height: 275,
        marginLeft: 8
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    valor: {
        color: "green",
        fontSize: 12,
        marginLeft: 300,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: 414,
        height: 189,
        borderRadius: 3,
    }, 
    
});