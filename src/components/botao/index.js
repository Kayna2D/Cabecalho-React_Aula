import React,{Fragment} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Botao({Logo,texto,cor,logo2,texto2,cor2,logo3,texto3,cor3,logo4,texto4,cor4,logo5,texto5,cor5,logo6,texto6,cor6}){

    return(
        <Text style={estilo.containerBotoes1}>
            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor}]}>
                <Ionicons name= {Logo} size={20} color="white"

                style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor2}]}>
                <Ionicons name= {logo2} size={20} color="white"

                style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto2} </Text>

            </TouchableOpacity>

                           
            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor3}]}>
                <Ionicons name= {logo3} size={20} color="white"

                style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto3} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor4}]}>
                <Ionicons name= {logo4} size={20} color="white"

                style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto4} </Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor5}]}>
                <Ionicons name= {logo5} size={20} color="white"

                style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto5} </Text>

            </TouchableOpacity>

            <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor6}]}>
                <Ionicons name= {logo6} size={20} color="white"

                style= {{marginRight:10}}/>
                <Text style ={estilo.textoBotao} > {texto6} </Text>

            </TouchableOpacity>
           
            </Text>
        
    );

}

const estilo = StyleSheet.create({

    containerBotoes1: {
        flexDirection:'row',
        marginBottom:10,
        justifyContent:"center"
    },

    textoBotao:{
        color:'white',
        fontWeight:'bold'
    },

    botoes:{
        padding:5,
        marginHorizontal:10,
        width:'45%',
        alignItems:'center',
        justifyContent:'flex-start',

        fontSize:12,
        color:'white',
        flexDirection:'row' 
    }
})