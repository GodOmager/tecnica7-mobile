import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function ButtonAction() {
  return (
    <View style={styles.container}>
      <View style={styles.botones}>
        
        <View style={styles.historico}>
          <Text>Histórico</Text>
          <FontAwesome5 name="calendar-alt" size={14} color="#030A8C" solid />
        </View>
        <View style={styles.asistencia}>
          <Text style={{ color: '#fff' }}>Tomar Asistencia</Text>
          <FontAwesome5 name="edit" size={14} color="#fff" solid />
        </View>

      </View>

      <View style={styles.mostrar}>

        <View style={styles.presentes}>

          <View style={styles.contenedorNumeroPresentes}>
            <Text style={{ color: '#fff' }}>12</Text>
          </View>
          <Text style={{ color: '#77BD25' }}>Presentes</Text>
        </View>

        <View style={styles.tardanzas}>

          <View style={styles.contenedorNumeroTardanzas}>
            <Text style={{ color: '#fff' }}>12</Text>
          </View>
          <Text style={{ color: '#FF9F47' }}>Presentes</Text>
        </View>

        <View style={styles.ausentes}>

          <View style={styles.contenedorNumeroAusentes}>
            <Text style={{ color: '#fff' }}>12</Text>
          </View>
          <Text style={{ color: '#FF5454' }}>Presentes</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    gap: 18,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2659BF",
  },

  botones:{
    display: "flex",
    flexDirection: "row",
    gap: 18,
  },

  mostrar:{
    display: "flex",
    flexDirection: "row",
    gap: 14,
  },

  contenedorNumeroPresentes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:24,
    width:24,
    borderRadius: 100,
    backgroundColor: '#77BD25',
    
  },

  contenedorNumeroTardanzas: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:24,
    width:24,
    borderRadius: 100,
    backgroundColor: '#FF9F47',
    
  },

  contenedorNumeroAusentes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:24,
    width:24,
    borderRadius: 100,
    backgroundColor: '#FF5454',
    
  },

  historico: {
    display: "flex",
    flexDirection: "row",
    width: 146,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2659BF",
    borderRadius: 6,
    
  },

  presentes: {
    display: "flex",
    flexDirection: "column",
    width: 96,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#77BD25",
    borderRadius: 6,
    
  },

  tardanzas: {
    display: "flex",
    flexDirection: "column",
    width: 96,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF9F47",
    borderRadius: 6,
    
  },

  ausentes: {
    display: "flex",
    flexDirection: "column",
    width: 96,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF5454",
    borderRadius: 6,
    
  },

  asistencia:{
    display: "flex",
    flexDirection: "row",
    width: 146,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#030A8C",
    color: "#fff",
    borderRadius: 6,
  }

});

export default ButtonAction;

