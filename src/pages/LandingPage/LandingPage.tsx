import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';
import styles from './LandingPage.styles';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150.png?text=Hero+Image' }}
          style={styles.heroImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.subtitle}>
          Your all-in-one solution for seamless patient and clinic management.
        </Text>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Sidebar')}
          style={styles.ctaButton}
          labelStyle={styles.ctaLabel}
        >
          Get Started
        </Button>

        {/* Test Button to go to NotFound */}
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('NotFound')}
          style={{ marginTop: 20 }}
        >
          Go to NotFound
        </Button>

        <Text style={styles.footer}>© 2025 MyApp. All rights reserved.</Text>
      </ScrollView>
    </PaperProvider>
  );
};

export default LandingPage;
