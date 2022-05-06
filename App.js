import { StatusBar } from 'expo-status-bar';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import Jogos from './src/components/jogos';
import JOGOS from './src/dados/jogos';
import Destaques from './src/components/destaque';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Lancamentos from './src/components/lancamentos';
import Novos from './src/components/novos';
import NOVOS_JOGOS from './src/dados/novos_jogos';


export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
      <View>
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
        <Destaques></Destaques>
        <View>
          <FlatList
          horizontal={true}
          data = {JOGOS}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

          <Jogos
          titulo ={item.nome}
          imagem ={item.imagem}
          valor ={item.valor}
          />  
          )}
          />
        </View>
        <Lancamentos></Lancamentos>
        <View>
        <FlatList
        horizontal={true}
        data={NOVOS_JOGOS}
        keyExtractor = {(item) => item.id}
        renderItem = { ({ item }) => (

        <Novos
        titulo ={item.nome}
        imagem ={item.imagem}
        valor ={item.valor}
        />  
        )}
        />

        </View>
        
    </View>
  );
}



