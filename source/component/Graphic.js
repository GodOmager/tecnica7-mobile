// AttendanceGauge.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, G, Circle } from 'react-native-svg';

const AttendanceGauge = ({ percentage = 75 }) => {
  const radius = 100;
  const strokeWidth = 40;
  const center = radius + strokeWidth;
  const circumference = Math.PI * radius;
  
  // Calcula el ángulo para el porcentaje
  const angle = (percentage / 100) * 180;
  const radians = (angle * Math.PI) / 180;

  // Coordenadas del arco
  const x = center + radius * Math.cos(Math.PI - radians);
  const y = center - radius * Math.sin(Math.PI - radians);

  const largeArcFlag = angle > 180 ? 1 : 0;

  const path = `
    M ${center - radius} ${center}
    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}
  `;

  return (
    <View style={styles.container}>
      <Svg width={center * 2} height={center + strokeWidth}>
        {/* Fondo rojo */}
        <Path
          d={`
            M ${center - radius} ${center}
            A ${radius} ${radius} 0 1 1 ${center + radius} ${center}
          `}
          stroke="#D94B4B"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Arco verde */}
        <Path
          d={path}
          stroke="#77BD25"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.percentage}>{percentage}%</Text>
        <Text style={styles.label}>Asistencia</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
});

export default AttendanceGauge;
