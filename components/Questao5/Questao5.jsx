import {View, Text, Button} from 'react-native'
import {useEffect} from 'react'
import {useState} from 'react'

function Questao5(){
    const [name, setName] = useState ()
    const [populacao, setPopulacao] = useState ()
    const [country, setCountry] = useState ("africa")
    
    useEffect(
        ()=>{
            fetch(`https://restcountries.com/v2/region/${country}?fields=name,population`)
            
            .then((response)=>{
                return response.json();
                
            })
            .then(
                (responseJson)=>{
                    console.log(responseJson)
                    let tamanho=0
                    let namee='';
                    if(country == 'americas'){
                        console.log(responseJson)
                        let k=0;
                        responseJson.forEach(i => {
                            if (k===0){
                                tamanho = i.population
                                namee = i.name
                            }else{
                                if(i.population >= tamanho){
                                    tamanho = i.population
                                    namee = i.name
                                }
                            }
                            k++
                        });
                    
                    }else{
                        console.log(responseJson)
                        let k=0;
                        responseJson.forEach(i => {
                            if (k===0){
                                tamanho = i.population
                                namee = i.name

                            }else{
                                if(i.population <= tamanho){
                                    tamanho = i.population
                                    namee = i.name
                                }
                            }
                            k++
                        });
                    }
                    
                    setPopulacao(tamanho);
                    setName(namee)

            })    

            .catch((error) =>{
                console.log("erro")
            })
        },
)

    function botaoAmerica(){
        setCountry('americas') 
    }

    function botaoAsia(){
        setCountry('asia')
    }


    return(
        <View>
            <Text>Ola sou a {country}</Text>
            <Text>Me chamo: {name}</Text>
            <Text>Me tenho a população de: {populacao}</Text>

            <Button title='AMERICAS' onPress={botaoAmerica}></Button>
            <Button title='ASIA' onPress={botaoAsia}></Button>

        </View>

    )

}


export default Questao5