import {View, Text, Image, FlatList} from 'react-native'
import {useEffect} from 'react'
import {useState} from 'react'

function Questao4(){

    const [name, setName] = useState ()
    const [populacao, setPopulacao] = useState ()

    useEffect(
        ()=>{
            fetch("https://restcountries.com/v2/region/africa?fields=name,population")
            
            .then((response)=>{
                return response.json();
                
            })
            .then(
                (responseJson)=>{
                    console.log(responseJson)
                    let max=0;
                    let namee='';
                    let k=0;
                    responseJson.forEach(i => {
                        if (k===0){
                            max = i.population
                            namee = i.name

                        }else{
                            if(i.population >= max){
                                max = i.population
                                namee = i.name
                            }
                        }
                        k++


                    });
                    setPopulacao(max);
                    setName(namee)

                }
            )

            .catch((error) =>{
                console.log("erro")
            })
        },
)


    return(
        <View>
            <Text>Ola sou a maior cidade</Text>
            <Text>Me chamo: {name}</Text>
            <Text>Me tenho a população de: {populacao}</Text>
        </View>

    )

}


export default Questao4