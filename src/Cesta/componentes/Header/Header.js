import React from "react";
import {Image, StyleSheet, Dimensions} from 'react-native';
import topo from '../../../../assets/topo.png';
import Texto from '../../../componentes/Texto'

const width = Dimensions.get('screen').width;

export default function Header( {h1} ) {
  return (
    <>
      <Image style={styles.topo} source={topo} />
      <Texto style={styles.h1}> {h1} </Texto> 
    </>
  );
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },

    h1: {
        color: '#fff',
        width: "100%",
        position: 'absolute',
        textAlign: 'center',
        padding: 16,
        fontSize: 20,
        fontWeight: 'bold',
    },

})
