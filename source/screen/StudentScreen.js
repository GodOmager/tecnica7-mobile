import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import StudentProfileHeader from "../component/StudentProfileHeader";
import Tabs from "../nav/Tabs";
import StudentPersonal from "../component/StudentPersonal";
import StudentAttendance from "../component/StudentAttendance";
import StudentGrades from "../component/StudentGrades";

export default function StudentScreen() {
  const [activeTab, setActiveTab] = useState("Personal");

  const renderContent = () => {
    switch (activeTab) {
      case "Personal":
        return <StudentPersonal />;
      case "Asistencias":
        return <StudentAttendance />;
      case "Notas":
        return <StudentGrades />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <StudentProfileHeader
          initials="MW"
          name="Martinez Walter"
          course="7mo 1ra Programación - Grupo A"
        />

        <Tabs onTabChange={setActiveTab} TABS = {["Personal", "Asistencias", "Notas"]} />

        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    gap: 24,
  },
});
