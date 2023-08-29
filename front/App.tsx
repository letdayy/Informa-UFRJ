import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';

//Telas
import Home from './src/pages/Home';
import Register from './src/pages/Register/Register';
import Profile from "./src/pages/Profile/Profile";
import Favorites from "./src/pages/Favorites/Favorites";

//Font 
import { useFonts, Poppins_700Bold, Poppins_600SemiBold_Italic } from '@expo-google-fonts/poppins';

//Mocks
import News from "./src/mocks/News"

//Apploading (aparece a splashScreen enquanto carrega)
// import AppLoading from 'expo-app-loading';
import Login from "./src/pages/Login/Login"

export default function App() {
  const [fontLoaded] = useFonts({
    "PoppinsBold": Poppins_700Bold,
    "PoppinsItalic": Poppins_600SemiBold_Italic
  });

  // if (!fontLoaded){
  //   return <AppLoading />
  // }
  
  return (
    // <SafeAreaView style={{flex:1}}>
    //   <StatusBar />
      // <Home {...News} />
      <Login />
    // </SafeAreaView>
    
  );
}
