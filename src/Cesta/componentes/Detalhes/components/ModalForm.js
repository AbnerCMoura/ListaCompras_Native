import React, { useContext, useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, ToastAndroid, Alert } from "react-native";
import { ValueContext } from "../../../../contexts/valuePicker";
import Texto from '../../../../componentes/Texto'
import uuid from 'react-native-uuid';
import  { useAsyncStorage }  from '@react-native-async-storage/async-storage'


export default function ModalForm() {
  const {getItem, setItem} = useAsyncStorage("@orgs-cesta:ListaCompras")

  const {setModalVisible, setCesta } = useContext(ValueContext);
  const [produtoNovo, setProdutoNovo] = useState()
  const [precoNovo, setPrecoNovo] = useState()

  const onSubmit = async () => {
    try{
    const id = uuid.v4();

    const newPreco = precoNovo.replace(/,/i, '.')
    const newData = 
      {
        id: id,
        nome: produtoNovo,
        preco: newPreco,
        precototal: 0,
        qtd: 0
      }
    

    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData,  newData];

    await setItem(JSON.stringify(data))

    setCesta(data)

    ToastAndroid.show('Adicionado!', ToastAndroid.SHORT, ToastAndroid.TOP)

    setModalVisible(false)
  
  }catch(error){
    console.log(error)
    Alert.alert('Digite o nome  e preço do produto')
  }
}
  return (
    <>
    <Texto style={styles.titulo}>Digite as informações do produto:</Texto>
    <View style={styles.container}>
      <Texto style={styles.inputTitle}>Digite o nome do produto: </Texto>
      <TextInput
        autoCapitalize="none"
        value={produtoNovo}
        style={styles.input}
        placeholder={'Digite nome do produto'}
        onChangeText={setProdutoNovo}
      />
      
      <Texto style={styles.inputTitle}>Digite o nome do produto: </Texto>
      <TextInput
        autoCapitalize="none"
        keyboardType="numeric"
        value={precoNovo}
        style={styles.input}
        placeholder={'Digite preço do produto'}
        onChangeText={setPrecoNovo}
      />  
    
    <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Texto style={styles.btnText}>Adicionar ao carrinho</Texto>
      </TouchableOpacity>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontSize: 20,
    margin: 10,

  },
  container:{
    height: 350,
  },
  inputTitle:{
    fontSize: 16,
    marginHorizontal: 10,
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#868686',
  },
  btn:{
    backgroundColor: '#2a9f85', 
    borderRadius: 10,
    margin: 10,
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btnText:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  }
});
