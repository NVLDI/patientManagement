import React, { useRef, useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './NotificationModal.style';

import OpenRecord from './OpenRecord/OpenRecord';
import ViewHistory from './ViewHistory/ViewHistory';

interface Notification {
  id: string;
  text: string;
  time: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  patientId: string | null;
  notifications: Notification[];
}

const NotificationModal: React.FC<Props> = ({
  visible,
  onClose,
  patientId,
  notifications,
}) => {
  const [activeView, setActiveView] = useState<'default' | 'record' | 'history'>('default');

  const iconAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (activeView === 'default') {
      Animated.timing(iconAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      iconAnim.setValue(0);
    }

    if (activeView === 'record' || activeView === 'history') {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [activeView]);

  if (!patientId || notifications.length === 0) return null;

  const patientName = 'John Doe'; // Replace with dynamic patient name if needed

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            {activeView !== 'default' ? (
              <TouchableOpacity onPress={() => setActiveView('default')}>
                <Ionicons name="arrow-back" size={24} color="#007AFF" />
              </TouchableOpacity>
            ) : (
              <Text style={styles.title}>🩺 Patient Notifications</Text>
            )}
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#888" />
            </TouchableOpacity>
          </View>

          {/* Patient Info */}
          <Text style={styles.patientId}>Patient ID: {patientId}</Text>
          <Text style={styles.patientName}>Name: {patientName}</Text>

          {/* Default View */}
          {activeView === 'default' && (
            <>
              <ScrollView style={styles.list}>
                {notifications.map((n) => (
                  <View key={n.id} style={styles.item}>
                    <Text style={styles.text}>• {n.text}</Text>
                    <Text style={styles.time}>{n.time}</Text>
                  </View>
                ))}
              </ScrollView>

              <Animated.View
                style={[
                  styles.iconRow,
                  {
                    opacity: iconAnim,
                    transform: [
                      {
                        translateY: iconAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [10, 0],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <TouchableOpacity style={styles.iconBox} onPress={() => setActiveView('record')}>
                  <Text style={styles.icon}>📁</Text>
                  <Text style={styles.tooltip}>Open Record</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox}>
                  <Text style={styles.icon}>📞</Text>
                  <Text style={styles.tooltip}>Call Patient</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBox} onPress={() => setActiveView('history')}>
                  <Text style={styles.icon}>📄</Text>
                  <Text style={styles.tooltip}>View History</Text>
                </TouchableOpacity>
              </Animated.View>
            </>
          )}

          {/* Subview with Fade-in Animation */}
          {(activeView === 'record' || activeView === 'history') && (
            <Animated.View style={{ opacity: fadeAnim }}>
              {activeView === 'record' && <OpenRecord />}
              {activeView === 'history' && <ViewHistory />}
            </Animated.View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
