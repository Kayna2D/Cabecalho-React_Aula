import { StatusBar } from 'expo-status-bar';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
      <Botao
        Logo =  "logo-android"
        texto = "Apps"
        cor = "#93c572"
        logo2 = "game-controller" 
        texto2 = "Jogos"
        cor2 = "#525e98"
        >
        </Botao>
        <Botao
        Logo = "film" 
        texto = "Filmes e Séries"
        cor = "#f93a2f"
        logo2 = "headset-sharp" 
        texto2 = "Música"
        cor2 = "#0099e1"
        >
        </Botao>
        <Botao
        Logo = "book" 
        texto = "Livros"
        cor = "#a652bb"
        logo2 = "caret-up"
        texto2 = "Atualizações"
        cor2 = "grey"
        >
        </Botao>
    </View>
  );
}



