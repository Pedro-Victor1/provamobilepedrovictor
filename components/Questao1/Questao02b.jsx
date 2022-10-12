import {View, Text, FlatList} from 'react-native';

function Questao1b(){

    let lista=[
        {disciplinas: 'Programação IV, Direção de Arte, Desenho'},
    ]
    return(
        <View>
            <FlatList
                 data={lista}
                 renderItem={
                     ({item})=>{
                        return(
                             <View>
                                 <Text>Disciplinas: {item.disciplinas}</Text>
                             </View>
                         )
                     }
                 }
            />
               
            
        </View>

    )

}

export default Questao1b