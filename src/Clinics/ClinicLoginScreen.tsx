// ClinicLoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signIn, confirmSignIn } from 'aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function ClinicLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [challengeUser, setChallengeUser] = useState<any>(null);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = await signIn({ username: email, password });
      console.log('✅ Clinic login successful:', user);

      if (user.nextStep?.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD') {
        // Cognito requires new password
        console.log('⚠️ New password required');
        setChallengeUser(user);
      } else {
        // Normal login flow
        navigation.navigate('ClinicDashboard');
      }
    } catch (error: any) {
      console.error('❌ Login failed:', error);
      Alert.alert('Login Failed', error.message || 'Invalid credentials');
    }
  };

  const handleNewPassword = async () => {
    try {
      if (!challengeUser) return;
      const result = await confirmSignIn({
        challengeResponse: newPassword,
        options: {
          userAttributes: {
            email, // optional, but can help
          },
        },
      });

      console.log('✅ Password reset successful:', result);
      Alert.alert('Success', 'Password updated successfully!');
      navigation.navigate('ClinicDashboard');
    } catch (error: any) {
      console.error('❌ Failed to set new password:', error);
      Alert.alert('Error', error.message || 'Password reset failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clinic Login</Text>

      {!challengeUser ? (
        <>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={{ marginBottom: 10 }}>
            You must set a new password before continuing.
          </Text>
          <TextInput
            placeholder="New Password"
            secureTextEntry
            style={styles.input}
            onChangeText={setNewPassword}
            value={newPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleNewPassword}>
            <Text style={styles.buttonText}>Set New Password</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
