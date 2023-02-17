import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";
import Button from "./buttons";
import {ValueContext} from '../../../contexts/valuePicker'
import  { useAsyncStorage }  from '@react-native-async-storage/async-storage';
import lixeira from '../../../../assets/lixo.png'


export default function Item({ id ,nome, preco, qtd, precototal}) {  

  const {qtdi, setQtdi, setCesta} = useContext(ValueContext)

  const {getItem, setItem} = useAsyncStorage("@orgs-cesta:ListaCompras")

  const handleRemove = async (id) =>{
    const response = await getItem()
    const previousdata = response ? JSON.parse(response) : [];
    
    const data = previousdata.filter((item) => item.id !== id);

    setItem(JSON.stringify(data));
    setCesta(data)

    console.log(data)
  }
  
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

      <TouchableOpacity style={styles.remove} onPress={() => handleRemove(id)}>
        <Texto style={styles.texto}>{lixeira}</Texto>
      </TouchableOpacity>

      </View>
      <Button id={id} qtd={qtd} setQtd={setQtdi} precoTotal={precototal} />


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
  },
  remove:{
    text:'white'
  }

});
