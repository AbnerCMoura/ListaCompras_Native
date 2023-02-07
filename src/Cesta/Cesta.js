import React from 'react';
import { ScrollView, StyleSheet, View} from 'react-native';
import { useFonts , Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Header from '../Cesta/componentes/Header';
import Detalhes from '../Cesta/componentes/Detalhes';
import Itens from './componentes/Itens'

export default function Cesta({header, detalhes, itens}){
    const [fontLoaded] = useFonts({
       'MontserratRegular': Montserrat_400Regular,
       'MontserratBold': Montserrat_700Bold,
    });

    if(!fontLoaded){
        return null
    }

    return (
        <ScrollView>
        <Header {...header}/>
        <View style={styles.container}>
            <Detalhes {...detalhes}/>
            <Itens {...itens}/>
        </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

