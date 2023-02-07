import React from "react";
import {Image, StyleSheet, View, TouchableOpacity, Alert} from 'react-native'
import Texto from '../../../componentes/Texto';


export default function Detalhes({titulo, logoFazenda, nomeFazenda, descricao, preco, botao}) {
  return (
    <>
      <Texto style={styles.titulo}>{titulo}</Texto>

      <View style={styles.logo_container}>
        <Image source={logoFazenda} style={styles.logo_fazenda} />
        <Texto style={styles.tituloFazenda}>{nomeFazenda}</Texto>
      </View>

      <Texto style={styles.descricao}>
        {descricao}
      </Texto>

      <Texto style={styles.preco}>{preco}</Texto>

      <TouchableOpacity onPress={() => Alert.alert("👍")} style={styles.botao} >
        <Texto style={styles.txtbotao}>{botao}</Texto>
      </TouchableOpacity>


    </>
  );
}

const styles = StyleSheet.create({
    
    titulo:{
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },

    logo_fazenda:{
        width: 32,
        height: 32,
        marginRight: 12,
    },

    logo_container:{
        flexDirection: 'row',
        paddingVertical: 12,
    },

    nomeFazenda:{
        lineHeight: 26,
        fontSize: 16,

    },

    descricao:{
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,

    },
    
    preco:{
        color: '#2a9f85',
        fontSize: 26,
        lineHeight: 42,
        paddingTop: 8,
        fontWeight: 'bold',
    },
    botao:{
        marginTop: 16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 8,
    },
    txtbotao:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
    Precionado:{
        backgroundColor: '#000'
    }
})
