import React, { createContext, useState } from "react";
import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

export const ValueContext = createContext({});

function ValueProvider({ children }) {


  const [valorTot, setValorTot] = useState(0);
  
  const [qtdi, setQtdi] = useState(0);

  const [cesta, setCesta] = useState([
    {
      id: 1,
      nome: "Tomate",
      imagem: tomate,
      preco: 3.49,
      qtd: 0,
      precototal: 0,
    },
    {
      id: 2,
      nome: "Brócolis",
      imagem: brocolis,
      preco: 4.99,
      qtd: 0,
      precototal: 0,
    },
    {
      id: 3,
      nome: "Batata",
      imagem: batata,
      preco: 3.99,
      qtd: 0,
      precototal: 0,
    },
    {
      id: 4,
      nome: "Pepino",
      imagem: pepino,
      preco: 4.19,
      qtd: 0,
      precototal: 0,
    },
    {
      id: 5,
      nome: "Abóbora",
      imagem: abobora,
      preco: 6.99,
      qtd: 0,
      precototal: 0,
    },
    {
        id: 6,
        nome: "Tomate",
        imagem: tomate,
        preco: 3.49,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 7,
        nome: "Brócolis",
        imagem: brocolis,
        preco: 4.99,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 8,
        nome: "Batata",
        imagem: batata,
        preco: 3.99,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 9,
        nome: "Pepino",
        imagem: pepino,
        preco: 4.19,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 10,
        nome: "Abóbora",
        imagem: abobora,
        preco: 6.99,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 11,
        nome: "Tomate",
        imagem: tomate,
        preco: 3.49,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 12,
        nome: "Brócolis",
        imagem: brocolis,
        preco: 4.99,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 13,
        nome: "Batata",
        imagem: batata,
        preco: 3.99,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 14,
        nome: "Pepino",
        imagem: pepino,
        preco: 4.19,
        qtd: 0,
        precototal: 0,
      },
      {
        id: 15,
        nome: "Abóbora",
        imagem: abobora,
        preco: 6.99,
        qtd: 0,
        precototal: 0,
      },
  ]);

  return (
    <ValueContext.Provider value={{ valorTot, setValorTot, cesta, setCesta, qtdi, setQtdi }}>
      {children}
    </ValueContext.Provider>
  );
}

export default ValueProvider;
