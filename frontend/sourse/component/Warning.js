import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

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

  if (loading) return <View><Text>Espera un poquito</Text></View>;

  return (
    feriadoHoy ? (
      <View style={styles.container}>
        <Text style={styles.texto}>Hoy no hay clases: {feriadoHoy}</Text>
      </View>
    ) : 
    <View style={styles.noFeriado}>
        <Image source={require('../../assets/event1.png')} style={styles.eventNoFeriadoImg}/>

        <Text style={{fontSize: 16, color: "#030A8C", fontWeight: 800}}>Sin Eventos</Text>
        <Text style={{fontSize: 12}}>No hay eventos en este momento</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffdddd',
    padding: 0,
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
  },
  noFeriado: {
    width: "100%",
    backgroundColor: "#C6E3FF",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  eventNoFeriadoImg:{
    height: 124,
    aspectRatio: 1,
  }
});

export default Warning;
