import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.dummyText}>asdf</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 10,
    backgroundColor: "yellow",
    borderWidth: 2,
    borderColor: "blue",
  },
  active: {
    backgroundColor: "lightgreen",
  },
});

export default App;
