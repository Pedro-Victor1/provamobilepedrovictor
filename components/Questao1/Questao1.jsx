import {View, Text} from 'react-native';

function Questao1(props){
    return(
        <View>
            <Text>Ola, {props.nome} esse é seu portal!</Text>
            {props.children} 
           
        </View>

    )

}


export default Questao1