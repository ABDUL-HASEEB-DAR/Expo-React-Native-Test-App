import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExternalNavigation from './Screens/externalNavigation';
import SpeechToText from './Screens/speechToText';

export default function App() {
  return (
    <View style={styles.container}>
      <SpeechToText />
      <StatusBar style="auto" />
    </View>
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
