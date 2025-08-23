import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
//import {Svg, Path, G } from 'react-native-svg';

// export default function Graphic(){
//   return(
//     <View style = {styles.container}>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       width: 200,
//       height: 100,
//       borderTopEndRadius: 100,
//       borderTopStartRadius: 100,
//       borderRadius: 6,
//       backgroundColor: "#D94B4B",
//     },
// });



// export default function RectanguloCurvo(){
//   return (
//     <Svg height="200" width="300" viewBox="0 0 300 200">
//       <Path
//         d="M0,50
//            Q150,0 300,50
//            L300,200
//            L0,200
//            Z"
//         fill="#3498db"
//       />
//     </Svg>
//   );
// };



// const { width } = Dimensions.get('window');
// const size = width * 0.8;
// const strokeWidth = 30;
// const radius = (size - strokeWidth) / 2;
// const centerX = size / 2;
// const centerY = size / 2;

// // Convierte ángulo en coordenadas polares (en radianes)
// const polarToCartesian = (angle) => {
//   return {
//     x: centerX + radius * Math.cos(angle),
//     y: centerY + radius * Math.sin(angle),
//   };
// };

// // Crea un arco en base a dos ángulos
// const createArc = (startAngle, endAngle) => {
//   const start = polarToCartesian(startAngle);
//   const end = polarToCartesian(endAngle);
//   const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

//   if ([start.x, start.y, end.x, end.y].some((v) => isNaN(v))) return '';

//   return `M${start.x} ${start.y} A${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
// };

// const AsistenciaGauge = ({ porcentaje }) => {
//   const safePercent = Math.max(0, Math.min(1, parseFloat(porcentaje) || 0)); // Asegura entre 0 y 1
//   const fillAngle = Math.PI * safePercent;
//   const progressPath = safePercent > 0 ? createArc(0, fillAngle) : '';

//   return (
//     <View style={styles.container}>
//       <Svg width={size} height={size / 2}>
//         <G rotation="-180" origin={`${centerX}, ${centerY}`}>
//           {/* Fondo rojo con extremos redondeados */}
//           <Path
//             d={createArc(-0.05, Math.PI + 0.05)} // Le da forma circular completa
//             stroke="#e74c3c"
//             strokeWidth={strokeWidth}
//             fill="none"
//             strokeLinecap="round"
//           />

//           {/* Arco verde del progreso */}
//           {progressPath !== '' && (
//             <Path
//               d={progressPath}
//               stroke="#7AC943"
//               strokeWidth={strokeWidth}
//               fill="none"
//               strokeLinecap={safePercent >= 1 ? 'round' : 'butt'}
//             />
//           )}
//         </G>
//       </Svg>

//       <Text style={styles.percentage}>{Math.round(safePercent * 100)}%</Text>
//       <Text style={styles.label}>Asistencia</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   percentage: {
//     position: 'absolute',
//     top: size * 0.2,
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   label: {
//     position: 'absolute',
//     top: size * 0.35,
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default AsistenciaGauge;
