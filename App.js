import {SafeAreaView, StatusBar} from 'react-native';
import Cesta from './src/Cesta'
import mock from './src/mocks/Cesta'
 
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}