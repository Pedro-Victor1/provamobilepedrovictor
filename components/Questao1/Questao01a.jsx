import {View, Text} from 'react-native';

function Questao1a(props){
    return(
        <View>
            <Text>Nome: {props.nome}</Text>
            <Text>Sobrenome: {props.sobrenome}</Text>
            <Text>Curso: {props.curso}</Text>     
        </View>

    )
}

export default Questao1a