import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import Texto from '../../../../../../componentes/Texto';
import ModalButton from './ModalButton/ModalButton';



export default function ModalItem({id, nome, imagem, preco, qtd, precototal}){

    if(qtd == 0){
        return <></>
    }


    return(
        <View style={styles.item}>
        <View style={styles.lista} key={nome}>
          <Image style={styles.image} source={imagem} />
          <View style={styles.detalhe} >
            <Texto style={styles.texto}>{nome}</Texto>
            <Texto style={styles.preco}> {`R$ ${preco} Kg`} </Texto>
            </View>
            <View style={styles.precotot}>
            <Texto> {`R$ ${precototal.toFixed(2)}`} </Texto>
          </View>   

            <ModalButton idItem={id} qtd={qtd}/>
          
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomColor: "#ececec",
        borderBottomWidth: 1,
        justifyContent: "space-between",
      },
      lista: {
        flexDirection: "row",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
      },
      image: {
        width: 46,
        height: 46,
        marginRight: 15,
      },
      texto: {
        fontSize: 16,
        lineHeight: 26,
        color: "#808080",
      },
      detalhe:{
        flexDirection: 'column',
      },
      preco:{
        fontSize: 12,
        color: "#808080",
      },
      precotot:{
        flexDirection: 'row',
        marginLeft: 30,
      }
})