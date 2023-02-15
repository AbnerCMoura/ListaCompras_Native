import React, { createContext, useState } from "react";

export const ValueContext = createContext({});

function ValueProvider({ children }) {

  const [modalVisible, setModalVisible] = useState(false);

  
  const [qtdi, setQtdi] = useState(0);

  const [cesta, setCesta] = useState([]);

  return (
    <ValueContext.Provider value={{ cesta, setCesta, qtdi, setQtdi, modalVisible, setModalVisible }}>
      {children}
    </ValueContext.Provider>
  );
}

export default ValueProvider;
