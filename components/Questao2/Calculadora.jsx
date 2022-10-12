import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {useState} from 'react';

function Questao2( ){

    const [valor1, setValor1] = useState(' ')
    const [valor2, setValor2] = useState(' ')
    const [resultado, setResultado] = useState(' ');

    function botaoMais(){
        let v1 = Number(valor1)
        let v2 = Number(valor2)
        setResultado(v1 + v2);
        console.log(resultado)
    }

    function botaoMulti(){
        let v1 = Number(valor1)
        let v2 = Number(valor2)
        setResultado(v1 * v2);
        console.log(resultado)
    }

    function botaoDivi(){
        let v1 = Number(valor1)
        let v2 = Number(valor2)
        if(v2===0){
            setResultado("Não pode ser dividido por zero")
        }else{
            setResultado(v1/v2);
        }
        console.log(resultado)
    }

    function botaoSub(){
        let v1 = Number(valor1)
        let v2 = Number(valor2)
        setResultado(v1-v2);
        console.log(resultado)
    }

    
    

    return(

        <View style={estilos.zeroview}>

            <Text>Calculadora</Text>
            
            <View style={estilos.firstview}>
                <TextInput 
                    placeholder='Digite Número 1'
                    style={estilos.input}
                    onChangeText={
                        (n)=>{
                            setValor1(n)
                            console.log(n)
                        }
                    }
                >
                </TextInput>

                <TextInput placeholder='Digite Número 2'
                    style={estilos.input}
                    onChangeText={
                        (n2)=>{
                            setValor2(n2)
                            console.log(n2)
                        }
                    }
                >    
                </TextInput>

            </View>

            <View style={estilos.secondview}>
                <View>
                    <Button title='+' onPress={botaoMais}></Button>
                </View>
                <View>
                    <Button title='/' onPress={botaoDivi}></Button>
                </View>
                <View>
                    <Button title='-' onPress={botaoSub}></Button>
                </View>
                <View>
                    <Button title='x' onPress={botaoMulti}></Button>
                </View>
            </View>
            
            <Text> Resultado: {resultado} </Text>

        </View>

    )

}

const estilos = StyleSheet.create({
    zeroview:{
        alignItems: 'center'
    },
    firstview:{
        flexDirection: 'row',
    },
    secondview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        
    },
    input:{
        height: 42,
        width: 200,
        borderColor: 'gray',
        borderWidth: 2,
        margin: 5
    },
    botao:{
        width: 200,
        color: 'red'
    }
})

export default Questao2