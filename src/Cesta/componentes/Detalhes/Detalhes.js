import React from "react";
import {Image, StatusBar, StyleSheet, View} from 'react-native'
import img_fazenda from '../../../../assets/logo.png';
import Texto from '../../../componentes/Texto';

export default function Detalhes() {
  return (
    <>
      <Texto style={styles.nome}>Cesta de Verduras</Texto>

      <View style={styles.logo_container}>
        <Image source={img_fazenda} style={styles.logo_fazenda} />
        <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
      </View>

      <Texto style={styles.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazendo direto
        para a sua cozinha.
      </Texto>

      <Texto style={styles.preco}>R$40,00</Texto>
    </>
  );
}

const styles = StyleSheet.create({
    
    nome:{
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
    }

})
