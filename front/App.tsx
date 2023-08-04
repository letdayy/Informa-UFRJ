import { StatusBar, SafeAreaView } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};
