import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Register from './pages/Register/Register';
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Splash from "./pages/Splash/Splash";
import OnBoarding1 from "./pages/OnBoardings/OnBoarding1";
import OnBoarding2 from "./pages/OnBoardings/OnBoarding2";
import Route from './Router'



export default function App() {
  return (
    <Route/>
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


