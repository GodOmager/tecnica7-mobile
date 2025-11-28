import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import StudentProfileHeader from "../component/StudentProfileHeader";
import Tabs from "../nav/Tabs";
import StudentPersonal from "../component/StudentPersonal";
import StudentAttendance from "../component/StudentAttendance";
import StudentGrades from "../component/StudentGrades";
import { API } from "../services/api";

export default function StudentScreen() {
  const route = useRoute();
  const { id } = route.params || {};

  const [activeTab, setActiveTab] = useState("Personal");
  const [personal, setPersonal] = useState(null);
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchAll = async () => {
      try {
        const p = await fetch(`http://${API}:3000/students/${id}`);
        const personalData = await p.json();
        setPersonal(personalData);

        const s = await fetch(`http://${API}:3000/attendance/student/${id}/stats`);
        const statsData = await s.json();
        setStats(statsData);

        const h = await fetch(`http://${API}:3000/attendance/by-student/${id}`);
        const historyData = await h.json();
        setHistory(historyData);
      } catch (e) {}
    };

    fetchAll();
  }, [id]);

  const renderContent = () => {
    if (activeTab === "Personal")
      return <StudentPersonal data={personal} />;

    if (activeTab === "Asistencias")
      return <StudentAttendance stats={stats} history={history} />;

    if (activeTab === "Notas")
      return <StudentGrades />;

    return null;
  };

  const initials = personal
    ? `${personal.nombre?.[0] || "?"}${personal.apellido?.[0] || "?"}`.toUpperCase()
    : "??";

  const fullName = personal
    ? `${personal.apellido || ""} ${personal.nombre || ""}`
    : "Cargando...";

  return (
    <ScrollView contentContainerStyle={{ padding: 24, backgroundColor: "#f5f5f5", paddingBottom: 102 }}>
      <View style={{ marginBottom: 38 }}>
        <StudentProfileHeader
          initials={initials}
          name={fullName}
          course="Sin datos"
        />
      </View>

      <Tabs onTabChange={(t) => setActiveTab(t)} TABS={["Personal", "Asistencias", "Notas"]} />

      {renderContent()}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f5f5f5",
    paddingBottom: 102,
  },
});
