import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CourseSelector from "./component/CourseSelector"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a Tecnica7</Text>
      <StatusBar style="auto"/>
      <CourseSelector/>
    </View>
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
