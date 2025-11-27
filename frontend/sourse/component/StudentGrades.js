import { View, Text, StyleSheet } from "react-native";
import AcademicSummary from "../component/AcademicSummary";
import { useState } from "react";

import SelectorCollapsible from "../nav/SelectorCollapsible";
import SubjectItem from "../component/SubjectItem";
import Title from "./Title";

export default function StudentGrades() {
  const [activeTab, setActiveTab] = useState("Primer Cuatrimestre");

  const renderContent = () => {
    switch (activeTab) {
      case "Primer Cuatrimestre":
        return (
          <View>
            <Title title ="Materias Aprobadas"></Title>
            <View style={styles.containerItems}>
              {
                approved.map((m, i) => (
                  <SubjectItem
                    key={i}
                    initials={m.initials}
                    subject={m.subject}
                    grade={m.grade}
                  />
                ))
              }
            </View>

            <Title title ="Materias Desaprobadas"></Title>
            <View style={styles.containerItems}>
              {
                failed.map((m, i) => (
                  <SubjectItem
                    key={i}
                    initials={m.initials}
                    subject={m.subject}
                    grade={m.grade}
                  />
                ))
              }
            </View>
          </View>);

      case "Segundo Cuatrimestre":
        return (
          <View>
            <Title title ="Materias Aprobadas"></Title>
            <View style={styles.containerItems}>
              {
                approved.map((m, i) => (
                  <SubjectItem
                    key={i}
                    initials={m.initials}
                    subject={m.subject}
                    grade={m.grade}
                  />
                ))
              }
            </View>

            <Title title ="Materias Desaprobadas"></Title>
            <View style={styles.containerItems}>
              {
                failed.map((m, i) => (
                  <SubjectItem
                    key={i}
                    initials={m.initials}
                    subject={m.subject}
                    grade={m.grade}
                  />
                ))
              }
            </View>
          </View>);

      default:
        return null;
    }
  }
  const approved = [
    { initials: "MW", subject: "Modelos y Sistemas", grade: 9 },
    { initials: "MW", subject: "Organización y Métodos", grade: 9 },
    { initials: "MW", subject: "Matemática", grade: 8 },
  ];

  const failed = [
    { initials: "MW", subject: "Física", grade: 4 },
    { initials: "MW", subject: "Inglés", grade: 3 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.summarySection}>
        <AcademicSummary
          color="#030A8C"
          nota="8.5"
          texto="Promedio Anual"
        />
        <AcademicSummary
          color="#D9411E"
          nota="8.5"
          texto="Promedio 1er Cuatrimestre"
        />
        <AcademicSummary
          color="#FF9F47"
          nota="8.5"
          texto="Promedio 2do Cuatrimestre"
        />
      </View>

      <SelectorCollapsible title="Seleccionar" options={['Primer Cuatrimestre', 'Segundo Cuatrimestre']} setActiveTab={(value) => setActiveTab(value)} />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  summarySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginVertical:38,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 24,
    color: "#333",
  },
  containerItems:{
    display:"flex",
    flexDirection:"column",
    gap: 12,
  }
});
