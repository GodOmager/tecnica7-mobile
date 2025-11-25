import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationIndependentTree } from "@react-navigation/native";
import TopTabs from "../nav/TopTabs";

import Header from "../component/Header";
import FloatingButton from "../component/FloatingButton";
import ComposeMessageScreen from "../component/ComposeMessageScreen";

export default function MailScreen() {
  const [composeVisible, setComposeVisible] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addSentMessage = (msg) => {
    setSentMessages((prev) => [...prev, msg]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer1} style={styles.screen}>

        <View style={styles.screen}>

          {/* HEADER */}
          <Header 
            title="Mensajes"
            iconName="search"
            showSearch={searchVisible}
            onIconPress={() => setSearchVisible(prev => !prev)}
            onSearchChange={setSearchQuery}
          />

          {/* TABS */}
          <View style={styles.contentContainer}>
            <NavigationIndependentTree>
              <TopTabs sentMessages={sentMessages} searchQuery={searchQuery} />
            </NavigationIndependentTree>
          </View>
        </View>

        {/* FAB */}
        <FloatingButton onPress={() => setComposeVisible(true)} name="pen" />

        {/* MODAL */}
        <ComposeMessageScreen
          visible={composeVisible}
          onClose={() => setComposeVisible(false)}
          onSend={addSentMessage}
          defaultFrom="Preceptor Eduardo"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: "#f5f5f5" 
  },

  contentContainer1: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 72,
    
  },

  contentContainer: {
    flex: 1,
  },
});
