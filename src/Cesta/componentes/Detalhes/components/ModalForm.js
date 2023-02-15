import React, { useContext, useEffect } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { ValueContext } from "../../../../contexts/valuePicker";
import Texto from '../../../../componentes/Texto'
import {useForm} from 'react-hook-form'


export default function ModalForm() {
  const { cesta, setCesta, setModalVisible } = useContext(ValueContext);
  const {register, setValue, handleSubmit} = useForm()

  useEffect(() => {
    register('produto')
    register('preco')
  }, [register])

  const onSubmit = (data) => {

    setCesta(
      [...cesta,
      {
      
      nome: data.produto,
      preco: data.preco,
      precototal: 0,
      qtd: 0,
    }]
    )
    
    setModalVisible(false)
  }
  
  return (
    <>
    <Texto style={styles.titulo}>Digite as informações do produto:</Texto>
    <View style={styles.container}>
      <Texto style={styles.inputTitle}>Digite o nome do produto: </Texto>
      <TextInput
        style={styles.input}
        label={'Produto'}
        placeholder={'Digite nome do produto'}
        onChangeText={text => setValue('produto', text)}
      />
      
      <Texto style={styles.inputTitle}>Digite o nome do produto: </Texto>
      <TextInput
      inputMode="numeric"
      keyboardType="number-pad"
      style={styles.input}
        label={'Preco'}
        placeholder={'Digite preço do produto'}
        onChangeText={text => setValue('preco', text)}
      />  
    
    <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
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
