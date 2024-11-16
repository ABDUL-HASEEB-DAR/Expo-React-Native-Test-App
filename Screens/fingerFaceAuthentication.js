// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import * as LocalAuthentication from 'expo-local-authentication';

// export default function FingerFaceAuthentication() {
//   const checkBiometrics = async () => {
//     const level = await LocalAuthentication.getEnrolledLevelAsync();
//     const hasHardware = await LocalAuthentication.hasHardwareAsync();
    
//     if (hasHardware && level > 0) {
//       const result = await LocalAuthentication.authenticateAsync();
//       if (result.success) {
//         console.log('Authentication successful' + JSON.stringify(result));        
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>FingerFaceAuthentication</Text>
//       <Button title='login with fingerprint' onPress={checkBiometrics} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },})