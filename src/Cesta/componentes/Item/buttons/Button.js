import React, { useContext, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import Texto from "../../../../componentes/Texto";
import { ValueContext } from "../../../../contexts/valuePicker";

export default function Button() {
  const { valorTot, setValorTot } = useContext(ValueContext);

  const [cesta, setCesta] = useState([
    {
      nome: "Tomate",
      preco: "R$3,49 Kg",
      qtd: 0,
    },
    {
      nome: "Brócolis",
      preco: `R$4,99 Kg`,
      qtd: 0,
    },
    {
      nome: "Batata",
      preco: "R$3,99 Kg",
      qtd: 0,
    },
    {
      nome: "Pepino",
      preco: "R$4,19 Kg",
      qtd: 0,
    },
    {
      nome: "Abóbora",
      preco: "R$6,99 Kg",
      qtd: 0,
    },
  ]);

  const getProdByName = (list, name) => {
    return list.filter(item => item.nome == name);
  }

  const handlerAdd = () => {
    setCesta({ 
        ...cesta, 
        qtd: cesta.qtd + 1 
    });
  };


  const handlerRm = () => {
    setCesta({
      ...cesta,
      qtd: cesta.qtd - 1,
    });
  };

  return (
    <View style={styles.contador}>
      <TouchableOpacity onPress={() => handlerRm()}>
        <Texto style={styles.decreText}> - </Texto>
      </TouchableOpacity>
      <Texto style={styles.txt}> {cesta.qtd} </Texto>
      <TouchableOpacity onPress={() => handlerAdd()}>
        <Texto style={styles.increText}> + </Texto>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  decreText: {
    padding: 10,
    paddingBottom: 27,
    marginTop: 20,
    color: "red",
  },
  increText: {
    padding: 10,
    marginTop: 20,
    color: "green",
  },
  txt: {
    padding: 10,
    marginTop: 20,
  },
  contador: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingLeft: 20,
  },
});
