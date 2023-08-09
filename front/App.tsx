import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './pages/Register/Register';
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

export default function App() {
  return (
    <ForgotPassword/>
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
