import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import styles from './PatientImage.styles';

const tabs = ['CBCT', 'STL', 'X-rays'];

const PatientImage = () => {
  const [activeTab, setActiveTab] = useState('CBCT');

  const handleUpload = () => {
    console.log('Upload Image clicked');
  };

  const renderTabContent = () => {
    if (activeTab === 'CBCT') {
      return (
        <View style={styles.imageGrid4}>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>Axial View</Text></View>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>Coronal View</Text></View>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>Sagittal View</Text></View>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>3D View</Text></View>
        </View>
      );
    }

    if (activeTab === 'STL') {
      return (
        <View style={styles.fullWidthPlaceholder}>
          <Text style={styles.imageLabel}>STL 3D Viewer Placeholder</Text>
        </View>
      );
    }

    if (activeTab === 'X-rays') {
      return (
        <View style={styles.imageGridDynamic}>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>X-ray Image 1</Text></View>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>X-ray Image 2</Text></View>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>X-ray Image 3</Text></View>
          <View style={styles.imagePlaceholder}><Text style={styles.imageLabel}>X-ray Image 4</Text></View>
        </View>
      );
    }

    return null;
  };

  return (
    <ScrollView style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Image Viewer</Text>
        <Pressable style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.uploadButtonText}>+ Upload Image</Text>
        </Pressable>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tabButton}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      {renderTabContent()}
    </ScrollView>
  );
};

export default PatientImage;
