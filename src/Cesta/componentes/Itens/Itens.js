import React from 'react';
import { StyleSheet,Image,View } from 'react-native';
import Texto from '../../../componentes/Texto'

export default function Itens({titulo, lista}){
    return(
        <>
        <Texto style={styles.titulo}>{titulo}</Texto>

        {/* {lista.map(({ nome, imagem}) => {
            return <View style={styles.lista} key={nome}>
                <Image style={styles.image} source={imagem} />
                <Texto style={styles.texto}  >{nome}</Texto>
                </View>
        })} */}
        </>
    )
}

const styles = StyleSheet.create({
    titulo:{
        color: '#464646',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    lista:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        alignItems: 'center',
    },    
    image:{
        width: 46,
        height: 46,
        marginRight: 24,
    },
    texto:{
        fontSize: 16,
        lineHeight: 26,
        color: '#808080'
    }
})