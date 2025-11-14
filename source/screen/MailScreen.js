import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationIndependentTree } from "@react-navigation/native";
import TopTabNavigator from "../nav/TopTabs";

import Header from "../component/Header";
import SendMessageIcon from "../component/SendMessageIcon";
import ComposeMessageScreen from "../component/ComposeMessageScreen";

export default function MailScreen() {
  const [composeVisible, setComposeVisible] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);

  // nuevo → control del buscador
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addSentMessage = (msg) => {
    setSentMessages((prev) => [...prev, msg]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>

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
            <TopTabNavigator sentMessages={sentMessages} searchQuery={searchQuery} />
          </NavigationIndependentTree>
        </View>
      </View>

      {/* FAB */}
      <SendMessageIcon onPress={() => setComposeVisible(true)} />

      {/* MODAL */}
      <ComposeMessageScreen
        visible={composeVisible}
        onClose={() => setComposeVisible(false)}
        onSend={addSentMessage}
        defaultFrom="Preceptor Eduardo"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f5f5f5" },
  contentContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 72,
  },
});
