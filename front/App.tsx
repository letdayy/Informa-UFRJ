import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './pages/Register/Register';
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Splash from "./pages/Splash/Splash";
import OnBoarding1 from "./pages/OnBoardings/OnBoarding1";
import OnBoarding2 from "./pages/OnBoardings/OnBoarding2";
import CommunityProfile from "./pages/CommunityProfile/CommunityProfile";

export default function App() {
  return (
    <CommunityProfile/>
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
