import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

const Warning = () => {
  const [feriadoHoy, setFeriadoHoy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerFeriados = async () => {
      try {
        const response = await fetch('https://api.argentinadatos.com/v1/feriados/2025');
        const data = await response.json();

        const hoy = moment().format('YYYY-MM-DD');

        // Verifica si algún feriado coincide con hoy
        const feriadoEncontrado = data?.data?.find(([fecha]) => fecha === hoy);

        if (feriadoEncontrado) {
          const descripcion = data.meta.fields[0].description || 'Feriado nacional';
          setFeriadoHoy(descripcion);
        }

      } catch (error) {
        console.error('Error al obtener los feriados:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerFeriados();
  }, []);

  if (loading) return <View>Espera un poquito</View>;

  return (
    feriadoHoy ? (
      <View style={styles.container}>
        <Text style={styles.texto}>📅 Hoy no hay clases: {feriadoHoy}</Text>
      </View>
    ) : null
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdddd',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    borderColor: '#ff4444',
    borderWidth: 1
  },
  texto: {
    color: '#900',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Warning;
