import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function MyPlans() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ fontSize: 20, color: "black", fontWeight: "800" }}>
        My Plans
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "black",
          fontWeight: "800",
          marginTop: 10,
          padding: 10,
        }}
      >
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa.'
      </Text>
    </View>
  );
}

function FindPlans() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "black",
          fontWeight: "800",
        }}
      >
        Find Plans
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "black",
          fontWeight: "800",
          marginTop: 10,
          padding: 10,
        }}
      >
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa.'
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="My Plans"
      tabBarOptisons={{
        activeTintColor: "black",
        labelStyle: { fontSize: 13, fontWeight: "bold" },

        indicatorStyle: {
          backgroundColor: "red",
        },

        style: {
          marginTop: insets.top,
          marginRight: 118,
          elevation: 0,
          shadowOpacity: 0,
          borderWidth: 0,
          backgroundColor: "#ffffff",
        },
      }}
      style={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="My Plans"
        component={MyPlans}
        option={{ tabBarLabel: "MyPlans" }}
      />

      <Tab.Screen
        name="Find Plans"
        component={FindPlans}
        option={{ tabBarLabel: "FindPlans" }}
      />
    </Tab.Navigator>
  );
}

export default function PlanScreen() {
  return <MyTabs />;
}
