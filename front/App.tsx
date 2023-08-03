import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './pages/Register/Register';
import Profile from "./pages/Profile/Profile";
import Favorites from "./pages/Favorites/Favorites";

export default function App() {
  return (
    <Register/>
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
