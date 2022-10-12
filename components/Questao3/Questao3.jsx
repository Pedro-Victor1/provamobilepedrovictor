import {View, Text, FlatList} from 'react-native'
import {useEffect} from 'react'
import {useState} from 'react'
import { Button } from 'react-native-web'

function Questao3(){

    const [names, setNames] = useState ('')
    const [offSet, setOffSet] = useState (0)

    useEffect(
        ()=>{
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`)
            
            .then((response)=>{
                return response.json();
                
            })
            .then(
                (responseJson)=>{
                    setNames(responseJson.results) 

                }
            )
            .catch((error) =>{
                console.log("erro")
            })
        },
    )

    function botaoAcao(){
        setOffSet(offSet+10);

    }

    return(
        <View>
            <Text>Lista de Pokemons</Text>           

            <View>
                <FlatList
                    data={names}
                    renderItem={
                        ({item})=>{
                            return(
                                <View>
                                    <Text>Nomes: {item.name}</Text>
                                </View>
                            )
                        }
                    }
                />

                <View>
                    <Button title="Próximos Pokemons" onPress={botaoAcao}></Button>
                </View>

            </View>
                
        
        </View>

    )

}

export default Questao3