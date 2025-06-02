// --path: src/features/auth/pages/Login/Login.tsx
import React, { useRef, useState,useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style';
import WelcomeSplash from '../../../../components/common/Splash/WelcomeSplash';

type LoginProps = {
  onClose: () => void;
  onForgotPassword: () => void;
  onLoginSuccess: (role: string) => void;
};

const mockUsers = {
  doctor: { password: 'Doctor@123', role: 'doctor' },
  nurse: { password: 'Nurse@123', role: 'nurse' },
  reception: { password: 'Reception@123', role: 'reception' },
  admin: { password: 'Admin@123', role: 'admin' },
};

const Login: React.FC<LoginProps> = ({ onClose, onForgotPassword, onLoginSuccess }) => {
  const [email, setEmail] = useState('doctor');
  const [password, setPassword] = useState('Doctor@123');
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      const user = mockUsers[email.toLowerCase()];
      if (user && user.password === password) {
        setShowSplash(true);
        setTimeout(() => {
          setShowSplash(false);
          onLoginSuccess(user.role);
          onClose();
        }, 2000);
      } else {
        alert('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };
useEffect(() => {
  const timer = setTimeout(() => {
    passwordRef.current?.focus(); // 👈 Automatically focus on mount
  }, 300); // slight delay ensures UI is ready

  return () => clearTimeout(timer);
}, []);
  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <>
      {showSplash && <WelcomeSplash onFinish={() => {}} />}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Welcome Back 👋</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>Login to your account</Text>

          <TextInput
            placeholder="Email (e.g. doctor)"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="default"
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={setEmail}
            value={email}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />

          <TextInput
            ref={passwordRef}
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            returnKeyType="done"
            onChangeText={setPassword}
            value={password}
            onSubmitEditing={handleLogin}
            onKeyPress={handleKeyPress}
            blurOnSubmit={false}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.button} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onClose();
              setTimeout(onForgotPassword, 300);
            }}
          >
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
