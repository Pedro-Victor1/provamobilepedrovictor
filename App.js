import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Questao1 from './components/Questao1/Questao1';
import Questao1a from './components/Questao1/Questao01a';
import Questao1b from './components/Questao1/Questao02b';
import Questao2 from './components/Questao2/Calculadora';
import Questao3 from './components/Questao3/Questao3';
import Questao4 from './components/Questao4/Questao4';
import Questao5 from './components/Questao5/Questao5';

export default function App() {
  return (
    <View style={styles.container}>
      <Questao1 nome="Pedro">
        <Questao1a nome="Pedro" sobrenome="Victor" curso="Design Digital"></Questao1a>
        <Questao1b></Questao1b>
      </Questao1>  

      <Questao2></Questao2>

      

      <Questao5></Questao5>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
