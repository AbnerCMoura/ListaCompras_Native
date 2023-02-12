import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Alert } from "react-native";
import Texto from "../../../componentes/Texto";
import Button from "./buttons";


export default function Item({item: { nome, imagem, preco }}) {  

  return (
    <View style={styles.item}>
      <View style={styles.lista} key={nome}>
        <Image style={styles.image} source={imagem} />
        <View style={styles.detalhe} >
          <Texto style={styles.texto}>{nome}</Texto>
          <Texto style={styles.preco}> {preco} </Texto>
        </View>
      </View>
      <Button />

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
    marginRight: 24,
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
  }

});
