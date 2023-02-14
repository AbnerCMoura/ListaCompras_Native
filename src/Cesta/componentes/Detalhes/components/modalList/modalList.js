import React, { useContext } from "react";
import { Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ValueContext } from "../../../../../contexts/valuePicker";
import ModalItem from "./ModalItem/ModalItem";
import Texto from '../../../../../componentes/Texto'

export default function modalList() {
  const { cesta } = useContext(ValueContext);

  const pedido = () => {
    alert("pedido realizado")
  }

  return (
    <>
      <ScrollView style={styles.main}>
        {cesta.map((item) => (
          <ModalItem
            id={item.id}
            nome={item.nome}
            imagem={item.imagem}
            preco={item.preco}
            qtd={item.qtd}
            precototal={item.precototal}
            key={item.id}
          />
        ))}
      </ScrollView>


      <TouchableOpacity onPress={() => pedido()} style={styles.confirm}>
        <Texto style={styles.textConfirm}>Fazer pedido</Texto>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 80,
  },
  texto: {
    fontWeight: "bold",
    padding: 10,
  },
  confirm:{
    backgroundColor: '#2a9f85',
    width: 120,
    height: 25,
    borderRadius: 15,
    marginHorizontal: 90,
  },
  textConfirm:{
    color: '#fff',
    textAlign:'center',
    lineHeight: 24,
    fontWeight: 'bold'
  }

});
