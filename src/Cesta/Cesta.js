import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, View, Image } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Header from "../Cesta/componentes/Header";
import Detalhes from "../Cesta/componentes/Detalhes";
import Item  from "./componentes/Item";
import Texto from "../componentes/Texto";
import { ValueContext } from '../contexts/valuePicker'

export default function Cesta({ header, detalhes, itens }) {

  const { cesta } = useContext(ValueContext)

  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }


  return (

    <>
      <FlatList
        data={cesta.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...header} />
              <View style={styles.container}>
                <Detalhes {...detalhes} />
                <Texto style={styles.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
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
