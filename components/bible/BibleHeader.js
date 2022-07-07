import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const BibleHeader = ({ text, disableBackButton }) => {
  const disabled = disableBackButton == null ? true : false;
  const nav = useNavigation();
  return (
    <View style={styles.txtIconContainer}>
      <Text style={styles.headerText}>{text}</Text>
      {disabled && (
        <Icon
          name="arrow-back"
          size={35}
          style={styles.icon}
          onPress={() => nav.goBack()}
        />
      )}
    </View>
  );
};

export default BibleHeader;

const styles = StyleSheet.create({
  txtIconContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 25,
    color: "#000000",
    fontFamily: "serif",
    fontWeight: "bold",
    width: "100%",
    textAlign:"center"
  },
  icon: {
    position: "absolute",
    color: "#000000",
    left: 10,
    paddingBottom: 10
  },
});
