import React, { useContext } from "react";
import { TouchableOpacity, View, StyleSheet, } from "react-native";
import Texto from "../../../../componentes/Texto";
import { ValueContext } from "../../../../contexts/valuePicker";

export default function Button(props) {
  const { cesta, setCesta} = useContext(ValueContext);


  const handlerAdd = (id) => {
    let filtro = cesta.filter((item) => {
      if (item.id == id) {
        item.qtd = parseInt(item.qtd) + 1;
        item.precototal = item.qtd * item.preco
      }
      return cesta;
      
    });
    
    setCesta(filtro);
  };
  

  const handlerRm = (id) => {
    let filtro = cesta.filter((item) => {
      if (item.id == id && item.qtd > 0) {
        item.qtd = item.qtd - 1;
        item.precototal -= item.preco
        
      }
      return cesta;
    });

    setCesta(filtro);
  };

  return (
    <View style={styles.contador}>
      <TouchableOpacity onPress={() => handlerRm(props.id)}>
        <Texto style={styles.decreText}> - </Texto>
      </TouchableOpacity>
      <Texto style={styles.txt}> {props.qtd} </Texto>
      <TouchableOpacity onPress={() => handlerAdd(props.id)}>
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

  },
});
