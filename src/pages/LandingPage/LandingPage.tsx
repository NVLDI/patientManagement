import React, { useState } from 'react';
import { ScrollView, View, ImageBackground, Modal, Dimensions } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';
import styles from './LandingPage.styles';

import Login from '../../features/auth/pages/Login/Login';
import SignUp from '../../features/auth/pages/Login/SignUp';
import ForgotPassword from '../../features/auth/pages/PasswordReset/ForgotPassword';

import DoctorLayout from '../../layouts/DoctorLayout/DoctorLayout';
import NurseLayout from '../../layouts/NurseLayout/NurseLayout';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import ReceptionLayout from '../../layouts/ReceptionLayout/ReceptionLayout';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const { width } = Dimensions.get('window');

  const handleLogout = () => {
    console.log('✅ setRole(null) called');
    setRole(null);
  };

  const renderLayout = () => {
    switch (role) {
      case 'doctor':
        return <DoctorLayout onLogout={handleLogout} />;
      case 'nurse':
        return <NurseLayout onLogout={handleLogout} />;
      case 'reception':
        return <ReceptionLayout onLogout={handleLogout} />;
      case 'admin':
        return <AdminLayout onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return (
    <PaperProvider>
      {role ? (
        renderLayout()
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1588776814546-0cf9f9f43f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            }}
            style={[styles.heroImage, { width }]}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <Text style={styles.heroTitle}>Welcome to WhiteSquare</Text>
              <Text style={styles.heroSubtitle}>Innovating Digital Healthcare for Every Clinic</Text>
              <View style={styles.buttonRow}>
                <Button
                  mode="contained"
                  onPress={() => setShowLogin(true)}
                  style={styles.ctaButton}
                  labelStyle={styles.ctaLabel}
                >
                  Login
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setShowSignUp(true)}
                  style={styles.secondaryButton}
                  labelStyle={styles.ctaLabel}
                >
                  Sign Up
                </Button>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What We Offer</Text>
            <Text style={styles.sectionItem}>📅 Intelligent Scheduling & Queue Management</Text>
            <Text style={styles.sectionItem}>📁 Cloud-Based Patient Documentation</Text>
            <Text style={styles.sectionItem}>💊 Integrated Medication Tracking & Alerts</Text>
            <Text style={styles.sectionItem}>💰 Smart Billing, Claims & Invoicing</Text>
            <Text style={styles.sectionItem}>📊 Actionable Clinical Analytics</Text>
          </View>

          <View style={styles.testimonialBanner}>
            <Text style={styles.quote}>
              "With WhiteSquare, we simplified our workflows, improved patient experience, and cut costs!"
            </Text>
            <Text style={styles.quoteAuthor}>— Dr. Anjali Rao, SmileCare Clinic</Text>
          </View>

          <View style={styles.footerArea}>
            <Text style={styles.footer}>
              © 2025 WhiteSquare Medical Innovation | Crafted with care for healthcare.
            </Text>
          </View>

          {/* Modals */}
          <Modal visible={showLogin} animationType="fade" transparent>
            <View style={styles.modalOverlay}>
              <Login
                onClose={() => setShowLogin(false)}
                onForgotPassword={() => {
                  setShowLogin(false);
                  setTimeout(() => setShowForgotPassword(true), 300);
                }}
                onLoginSuccess={(userRole) => {
                  console.log("✅ Login Success:", userRole);
                  setRole(userRole);
                }}
              />
            </View>
          </Modal>

          <Modal visible={showSignUp} animationType="fade" transparent>
            <View style={styles.modalOverlay}>
              <SignUp onClose={() => setShowSignUp(false)} />
            </View>
          </Modal>

          <Modal visible={showForgotPassword} animationType="fade" transparent>
            <View style={styles.modalOverlay}>
              <ForgotPassword onClose={() => setShowForgotPassword(false)} />
            </View>
          </Modal>
        </ScrollView>
      )}
    </PaperProvider>
  );
};

export default LandingPage;
