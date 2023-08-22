import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View } from 'react-native';

//Telas
import Home from './src/screens/Home';
import Register from './pages/Register/Register';
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";

//Font 
import { useFonts, Poppins_700Bold, Poppins_600SemiBold_Italic } from '@expo-google-fonts/poppins';

//Mocks
import News from "./src/mocks/News"

//Apploading (aparece a splashScreen enquanto carrega)
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontLoaded] = useFonts({
    "PoppinsBold": Poppins_700Bold,
    "PoppinsItalic": Poppins_600SemiBold_Italic
  });

  if (!fontLoaded){
    return <AppLoading />
  }
  
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Home {...News} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
