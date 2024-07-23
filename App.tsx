import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("#000");
  const [clickCount, setClickCount] = useState<number>(0);
  const [previousColors, setPreviousColors] = useState<string[]>([]);

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
    setPreviousColors((prevColors) => [...prevColors, randomColor]);
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      {!!previousColors.length && (
        <ScrollView
          horizontal
          style={styles.prevColorsList}
          contentContainerStyle={{ gap: 5 }}
        >
          {previousColors.map((color, index) => (
            <TouchableOpacity
              key={color + index}
              style={[styles.prevColorsListItem, { backgroundColor: color }]}
              onPress={() => {
                setBgColor(color);
              }}
            />
          ))}
        </ScrollView>
      )}
      <TouchableOpacity
        style={[styles.container, { backgroundColor: bgColor }]}
        onPress={generateRandomColor}
      >
        <Text style={styles.text}>Hello there</Text>
        <Text style={styles.counter}>Clicks: {clickCount}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  prevColorsList: {
    position: "absolute",
    top: 10,
    left: 0,
    backgroundColor: "#fff",
    padding: 10,
    zIndex: 1,
    maxWidth: "100%",
  },
  prevColorsListItem: {
    width: 25,
    height: 25,
    borderColor: "grey",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  counter: {
    marginTop: 20,
    fontSize: 18,
    color: "#fff",
  },
});

export default App;
