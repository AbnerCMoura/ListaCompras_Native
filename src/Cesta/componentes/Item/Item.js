import React, { useContext,useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Alert } from "react-native";
import Texto from "../../../componentes/Texto";
import Button from "./buttons";
import {ValueContext} from '../../../contexts/valuePicker'


export default function Item({ nome, preco, qtd, precototal}) {  

  const {qtdi, setQtdi} = useContext(ValueContext)

  return (
    <View style={styles.item}>
      <View style={styles.lista} key={nome}>
        <View style={styles.detalhe} >
          <Texto style={styles.texto}>{nome}</Texto>
          <Texto style={styles.preco}> {`R$ ${preco} Kg`} </Texto>
          </View>
          <View style={styles.precotot}>
          <Texto> {`R$ ${precototal.toFixed(2)}`} </Texto>
        </View>
      </View>
      <Button id={nome} qtd={qtd} setQtd={setQtdi} precoTotal={precototal} />

    </View>
  );
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

});
