import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExternalNavigation from './Screens/externalNavigation';
import SpeechToText from './Screens/speechToText'; // use development build 
import VideoPlayer from './Screens/videoPlayer';
import FingerFaceAuthentication from './Screens/fingerFaceAuthentication';

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
  },
});