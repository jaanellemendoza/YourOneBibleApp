import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



const OnboardingScreen = ({navigation}) => {
  return (

    <Onboarding
        onSkip={() => navigation.navigate("MainScreen")}
        onDone={() => navigation.navigate("MainScreen")}

        pages={[
            {
                backgroundColor: '#a6e4d0',
                image: <Image 
                style={styles.imahe}
                source={require('../../assets/onboarding-img1.png')} />,
                title: <Text
                style={styles.titleText}>Onboarding 1</Text>,
                subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image 
                style={styles.imahe}
                source={require('../../assets/onboarding-img2.png')} />,
                title: <Text
                style={styles.titleText}>Onboarding 2</Text>,
                subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            },
            {
                backgroundColor: '#e9bcbe',
                image: <Image 
                style={styles.imahe}
                source={require('../../assets/onboarding-img3.png')} />,
                title: <Text
                style={styles.titleText}>Onboarding 3</Text>,
                subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            },
        ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imahe: {
    width: 180,
    height: 180,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "bold"
  }
});
