import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const BibleNavigation = ({ text, switchFunc }) => {
  const onSwitchPressed =
    switchFunc == null
      ? () => {
          console.log("no switch func");
        }
      : switchFunc;
  return (
    <View style={styles.bookAndIcon}>
      <Icon
        name="caret-back-outline"
        size={40}
        style={styles.iconSwitch}
        onPress={() => onSwitchPressed("prev")}
      />
      <Text style={styles.text}>{text}</Text>
      <Icon
        name="caret-forward-outline"
        size={40}
        style={styles.iconSwitch}
        onPress={() => onSwitchPressed("next")}
      />
    </View>
  );
};

export default BibleNavigation;

const styles = StyleSheet.create({
  bookAndIcon: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  iconSwitch: {
    color: "#fff",
  },

  text: {
    fontFamily: "serif",
    color: "#fff",
    fontSize: 18,
  },
});
