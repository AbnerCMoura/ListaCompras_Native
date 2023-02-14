import React, { useState, useContext     } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Texto from '../../../../../../../componentes/Texto'
import { ValueContext } from "../../../../../../../contexts/valuePicker";


export default function ModalButton(props) {

    const { cesta, setCesta, setValorTot, valorTot} = useContext(ValueContext);

    const [qtdEle, setQtdEle] = useState(0)

    const deleteI = (id) => {
        let filtro = cesta.filter((item)=> {
            if(item.id == id){
                item.qtd = 0
                item.precototal = 0
            }
            return cesta
        })
        setValorTot(valorTot - filtro[id -1].precototal)
        setCesta(filtro)
    }




    return(
        <TouchableOpacity onPress={() => {deleteI(props.idItem)}}>
            <Texto>X</Texto>
        </TouchableOpacity>
     
    )
}

const styles = StyleSheet.create({

})