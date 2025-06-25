import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { signIn, confirmSignIn, getCurrentUser } from 'aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';

export default function SuperLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mfaCode, setMfaCode] = useState('');
  const [step, setStep] = useState<'login' | 'mfa'>('login');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const login = async () => {
    setLoading(true);
    try {
      const user = await signIn({ username: email, password });
      const challenge = (user as any)?.challengeName;

      if (challenge === 'SMS_MFA' || challenge === 'SOFTWARE_TOKEN_MFA') {
        setStep('mfa');
      } else {
        console.log('Login success:', user);
        navigation.navigate('SuperDashboard');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      alert(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const verifyMfa = async () => {
    setLoading(true);
    try {
      await confirmSignIn({ challengeResponse: mfaCode });
      const user = await getCurrentUser();
      console.log('MFA success:', user);
      navigation.navigate('SuperDashboard');
    } catch (err: any) {
      console.error('MFA error:', err);
      alert(err.message || 'MFA failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'padding', android: undefined })}
      style={styles.container}
    >
      <Card.Content style={{ alignItems: 'center' }}>
        <Text style={styles.companyName}>White Square</Text>
        <Text style={styles.companySub}>Medical Innovation Private Limited</Text>
      </Card.Content>

      <Card style={styles.card}>
        <Card.Content style={{ alignItems: 'center' }}>
          <Text style={styles.heading}>Super Admin Login</Text>

          {step === 'login' && (
            <>
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                theme={{ colors: { primary: '#343a40' } }}
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry={!showPassword}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                style={styles.input}
                theme={{ colors: { primary: '#343a40' } }}
              />
              <Button
                mode="contained"
                onPress={login}
                loading={loading}
                disabled={loading}
                style={styles.button}
                labelStyle={{ color: '#ffffff' }}
              >
                Login
              </Button>
            </>
          )}

          {step === 'mfa' && (
            <>
              <TextInput
                label="Enter MFA Code"
                value={mfaCode}
                onChangeText={setMfaCode}
                mode="outlined"
                keyboardType="numeric"
                style={styles.input}
                theme={{ colors: { primary: '#343a40' } }}
              />
              <Button
                mode="contained"
                onPress={verifyMfa}
                loading={loading}
                disabled={loading}
                style={styles.button}
                labelStyle={{ color: '#ffffff' }}
              >
                Verify
              </Button>
            </>
          )}

          <Text style={{ marginTop: 16 }}>
            Don't have an account?{' '}
            <Text style={{ color: '#007bff' }} onPress={() => navigation.navigate('SuperRegister')}>
              Register
            </Text>
          </Text>
        </Card.Content>
      </Card>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    marginTop: 20,
  },
  companyName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#343a40',
  },
  companySub: {
    fontSize: 25,
    color: '#6c757d',
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: '600',
    color: '#343a40',
  },
  input: {
    marginVertical: 8,
    width: '100%',
  },
  button: {
    backgroundColor: '#6c757d',
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
  },
});
