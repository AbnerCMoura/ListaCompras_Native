import React, { useContext,useEffect } from "react";
import { StyleSheet, View, ScrollView } from 'react-native'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Header from "../Cesta/componentes/Header";
import Detalhes from "../Cesta/componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../componentes/Texto";
import { ValueContext } from "../contexts/valuePicker";
import  { useAsyncStorage }  from '@react-native-async-storage/async-storage'


export default function Cesta({ header, detalhes, itens }) {
  const { getItem } = useAsyncStorage("@orgs-cesta:ListaCompras")
  const {setCesta , cesta} = useContext(ValueContext)

  const carregarLista = async() => {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setCesta(data)
  }

  useEffect(() => {
    carregarLista();
  },[])

  
  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <Header {...header} />
      <View style={styles.container}>
        <Detalhes {...detalhes} />
        <Texto style={styles.titulo}>{itens.titulo}</Texto>
      </View>


      
      {cesta.map(item => 
      <Item
        id={item.id}
        nome={item.nome}
        preco={item.preco}
        precototal={item.precototal}
        qtd={item.qtd}
        key={item.id}
      />
    )} 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
