import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AddStudentModal from "./AddStudentModal";
import initialData from "../json/students";
import FloatingButton from "../component/FloatingButton";
import SubjectItem from "../component/SubjectItem";

export default function StudentsListScreen({navigation}) {
    const [students, setStudents] = useState(initialData);
    const [showModal, setShowModal] = useState(false);

    const handleAddStudent = (newStudent) => {
        setStudents((prev) => [...prev, newStudent]);
        setShowModal(false);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.containerList}>
                <FlatList
                    data={students}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    renderItem={({ item }) => (
                        <SubjectItem
                            initials= {item.iniciales}
                            subject= {`${item.apellido} ${item.nombre}`}

                            grade={false}
                            onPress={() => navigation.navigate("StudentScreen")}
                        />
                    )}
                />
            </View>

            <FloatingButton name="plus" onPress={() => setShowModal(true)} />

            <AddStudentModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                onAdd={handleAddStudent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        gap: 38,
        paddingBottom: 72,
    }, 
    containerList:{
        display:"flex",
        gap: 24,
    }
})