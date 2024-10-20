import React from 'react';
import { View, Text, Button, StyleSheet, Linking, Platform } from 'react-native';

export default function ExternalNavigation() {

  const openMaps = () => {
    const destination = 'comsats islamabad'; // Replace with your desired destination
    const encodedDest = encodeURIComponent(destination);

    let url;
    if (Platform.OS === 'ios') {
      url = `maps://app?daddr=${encodedDest}`;
    } else {
      url = `google.navigation:q=${encodedDest}`;
    }

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        const webUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDest}`;
        return Linking.openURL(webUrl);
      }
    });
  };


  return (
    <View style={styles.container}>
      <Text>External Navigation</Text>
      <Button title="OPEN MAPS" onPress={openMaps} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  animatedBox: {
    height: 100,
    backgroundColor: 'violet',
  },
});
