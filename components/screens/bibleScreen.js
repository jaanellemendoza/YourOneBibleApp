import React from "react";
import { StyleSheet } from "react-native";
import { BibleView, BibleHome, BibleChapters, BibleVerses } from "./bible";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer , getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { BibleContexts } from "../bible";
//will be used for calling bible references {book, chapter:verse}

const Stack = createNativeStackNavigator();
//List of all the books of the bible
const BibleScreen = () => {
  
  return (
    <BibleContexts>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="book"
            component={BibleHome}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="chapters"
            component={BibleChapters}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verses"
            component={BibleVerses}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="passages"
            component={BibleView}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BibleContexts>
  );
};

export default BibleScreen;

const styles = StyleSheet.create({});
