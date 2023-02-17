import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  
} from "react-native";
import Texto from "../../../componentes/Texto";
import { ValueContext } from '../../../contexts/valuePicker';
import ModalForm from './components'

export default function Detalhes({
  titulo,
  descricao,
  botao,
}) {

  const {cesta, setModalVisible, modalVisible} = useContext(ValueContext)

  let testtot = 0
  
  for(let i = 0; i < cesta.length; i++ ){
    testtot = cesta[i].precototal + testtot
  }

  return (
    <>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
          <Texto style={styles.modalTitle}>Carrinho de compras</Texto>

          <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
              <Texto style={styles.textClose}>X</Texto>
            </TouchableOpacity>
            </View>

            {/* Modal List */}

            <ModalForm/>
            
          </View>
        </View>
      </Modal>


      <Texto style={styles.titulo}>{titulo}</Texto>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.botao} >
        <Texto style={styles.txtbotao}>{botao}</Texto>
      </TouchableOpacity>
      <Texto style={styles.preco}>{`R$ ${testtot.toFixed(2)}`}</Texto>

    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalHeader:{
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  modalTitle:{
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 7,
    height: 30,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
  buttonClose:{
    elevation: 3,
    width: 30,
    height: 30,
    justifyContent: 'center',
    margin: 6,
  },
  textClose: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 500,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },

  logo_fazenda: {
    width: 32,
    height: 32,
    marginRight: 12,
  },

  logo_container: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  nomeFazenda: {
    lineHeight: 26,
    fontSize: 16,
  },

  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    marginHorizontal: '27%',
    color: "#2a9f85",
    fontSize: 26,
    lineHeight: 42,
    paddingTop: 8,
    fontWeight: "bold",
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 8,
  },
  txtbotao: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  Precionado: {
    backgroundColor: "#000",
  },
});
