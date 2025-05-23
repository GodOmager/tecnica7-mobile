import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimerComponente from './componentes/PrimerComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TercerComponente from './componentes/TercerComponente';
export default function App() {
  return (
    <>
    <PrimerComponente/>
    <PrimerComponente/>
    <SegundoComponente/>
    <TercerComponente/>
    </>
  );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });