import React, {createContext, useState} from "react";
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

export const ValueContext = createContext({})

function ValueProvider({children}){


    const [valorTot, setValorTot] = useState(0);

    const [cesta, setCesta] = useState({
        lista: [
                    {
                        nome: "Tomate",
                        imagem: tomate,
                        preco: 'R$3,49 Kg',
                        qtd: 0
                    },
                    {
                        nome: "Brócolis",
                        imagem: brocolis,
                        preco: `R$4,99 Kg`,
                        qtd: 0
                    },
                    {
                        nome: "Batata",
                        imagem: batata,
                        preco: 'R$3,99 Kg',
                        qtd: 0
                    },
                    {
                        nome: "Pepino",
                        imagem: pepino,
                        preco: 'R$4,19 Kg',
                        qtd: 0
                    },
                    {
                        nome: "Abóbora",
                        imagem: abobora,
                        preco: 'R$6,99 Kg',
                        qtd: 0
                    }
                ]
            })

    if(valorTot<0){
        setValorTot(0)
      }


    return(
        <ValueContext.Provider value={{valorTot, setValorTot, cesta, setCesta}}>
            {children}
        </ValueContext.Provider>
    )
} 

export default ValueProvider;