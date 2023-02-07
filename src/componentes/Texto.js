import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function Texto({ children, style }){

    let fonte = stylesFont.Regular;

    if(style?.fontWeight === 'bold'){
        fonte = stylesFont.TextoNegrito;
    }

    return (
        <Text style={[style, fonte]}>{children}</Text>
    )
}

const stylesFont = StyleSheet.create({
    Regular:{
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    TextoNegrito:{
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    },
})