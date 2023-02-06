import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Header from '../Cesta/componentes/Header';
import Detalhes from '../Cesta/componentes/Detalhes';




export default function Cesta(){
    const [fontsLoaded] = useFonts({
        "MontserratRegular": Montserrat_400Regular,
        "MontserratBold": Montserrat_700Bold,
    });


    if (!fontsLoaded){
        return <View/>;
    }else{
    return (
        <>
        <Header/>
        <View style={styles.container}>
            <Detalhes/>
        </View>
        </>
    )
}}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

