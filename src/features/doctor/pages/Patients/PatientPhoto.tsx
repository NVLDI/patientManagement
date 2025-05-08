import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import styles from './PatientPhoto.styles';

const PatientPhoto = () => {
  const [photos, setPhotos] = useState([
    { id: 1, label: 'Photo 1' },
    { id: 2, label: 'Photo 2' },
    { id: 3, label: 'Photo 3' },
  ]);

  const handleUploadPhoto = () => {
    // Dummy upload handler
    const newPhoto = { id: photos.length + 1, label: `Photo ${photos.length + 1}` };
    setPhotos([...photos, newPhoto]);
  };

  return (
    <ScrollView style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Clinical Photos</Text>
        <Pressable style={styles.uploadButton} onPress={handleUploadPhoto}>
          <Text style={styles.uploadButtonText}>+ Upload Photo</Text>
        </Pressable>
      </View>

      {/* Photo Grid */}
      <View style={styles.photoGrid}>
        {photos.map((photo) => (
          <View key={photo.id} style={styles.photoPlaceholder}>
            <Text style={styles.photoText}>{photo.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default PatientPhoto;
