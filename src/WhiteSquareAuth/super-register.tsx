import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, Card } from 'react-native-paper';
import { signUp, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';

export default function SuperRegister() {
  const [step, setStep] = useState<'register' | 'confirm'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!passwordMatch) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: { email },
        },
      });
      setStep('confirm');
      alert('Registration successful! Please check your email for the verification code.');
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Sign-up failed');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      alert('Email verified successfully! Please log in.');
      navigation.navigate('SuperLogin');
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Confirmation failed');
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    try {
      await resendSignUpCode({ username: email });
      alert('Verification code resent!');
    } catch (err: any) {
      console.error(err);
      alert(err.message || 'Failed to resend code');
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
          <Text style={styles.heading}>Super Admin Registration</Text>

          {step === 'register' && (
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
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordMatch(text === confirmPassword);
                }}
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
              <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  setPasswordMatch(password === text);
                }}
                mode="outlined"
                secureTextEntry={!showConfirmPassword}
                right={
                  <TextInput.Icon
                    icon={showConfirmPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                }
                style={styles.input}
                theme={{ colors: { primary: '#343a40' } }}
              />
              {!passwordMatch && confirmPassword.length > 0 && (
                <Text style={styles.errorText}>Passwords do not match</Text>
              )}
              <Button
                mode="contained"
                onPress={handleRegister}
                loading={loading}
                disabled={loading || !passwordMatch}
                style={styles.button}
                labelStyle={{ color: '#ffffff' }}
              >
                Register
              </Button>
              <Text style={{ marginTop: 16 }}>
                Already have an account?{' '}
                <Text style={{ color: '#007bff' }} onPress={() => navigation.navigate('SuperLogin')}>
                  Login
                </Text>
              </Text>
            </>
          )}

          {step === 'confirm' && (
            <>
              <TextInput
                label="Verification Code"
                value={code}
                onChangeText={setCode}
                mode="outlined"
                keyboardType="numeric"
                style={styles.input}
                theme={{ colors: { primary: '#343a40' } }}
              />
              <Button
                mode="contained"
                onPress={handleConfirm}
                loading={loading}
                disabled={loading}
                style={styles.button}
                labelStyle={{ color: '#ffffff' }}
              >
                Verify Email
              </Button>
              <Button
                mode="outlined"
                onPress={resendCode}
                style={styles.resendButton}
                labelStyle={{ color: '#343a40' }}
              >
                Resend Code
              </Button>
            </>
          )}
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
  resendButton: {
    borderColor: '#343a40',
    marginTop: 10,
    width: '100%',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginLeft: 4,
  },
});
