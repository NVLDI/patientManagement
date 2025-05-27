// --path: src/features/auth/pages/Login/Login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Login.style';
import WelcomeSplash from '../../../../components/common/Splash/WelcomeSplash'; // ✅ Import

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

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
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry
            onChangeText={setPassword}
            value={password}
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
