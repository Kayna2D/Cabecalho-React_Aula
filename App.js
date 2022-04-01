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
        logo3 = "film" 
        texto3 = "Filmes e Séries"
        cor3 = "#f93a2f"
        logo4 = "headset-sharp" 
        texto4 = "Música"
        cor4 = "#0099e1"
        logo5 = "book" 
        texto5 = "Livros"
        cor5 = "#a652bb"
        logo6 = "caret-up"
        texto6 = "Atualizações"
        cor6 = "grey"
        >
        </Botao>
    </View>
  );
}



