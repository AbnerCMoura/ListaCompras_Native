import { useContext, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Cesta from "./src/Cesta";
import mock from "./src/mocks/Cesta";
import ValueProvider from "./src/contexts/valuePicker";

export default function App() {

  return (
    
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar />
          <ValueProvider>
          <Cesta {...mock} />
          </ValueProvider>
        </SafeAreaView>
      </>
   );
}
