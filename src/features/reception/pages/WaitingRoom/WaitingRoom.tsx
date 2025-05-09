import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import useStyles from './WaitingRoom.style';

const WaitingRoom = () => {
  const styles = useStyles();
  const [patients, setPatients] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', reason: '' });

  const checkIn = () => {
    if (form.name.trim()) {
      setPatients([...patients, { ...form, id: Date.now().toString() }]);
      setForm({ name: '', reason: '' });
      setShowModal(false);
    }
  };

  const checkOut = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const notifyStaff = () => {
    Alert.alert('Notification Sent', 'Staff has been notified about the patient.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waiting Room</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.checkIn} onPress={() => setShowModal(true)}>
          <Text style={styles.btnText}>✅ Check-In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewList} onPress={() => setShowList(!showList)}>
          <Text style={styles.btnText}>📋 View List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notify} onPress={notifyStaff}>
          <Text style={styles.btnText}>📣 Notify Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkOut} onPress={() => setPatients([])}>
          <Text style={styles.btnText}>🚪 Check-Out</Text>
        </TouchableOpacity>
      </View>

      {showList && (
        <FlatList
          data={patients}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSub}>{item.reason}</Text>
              </View>
              <TouchableOpacity onPress={() => checkOut(item.id)}>
                <Text style={styles.removeBtn}>❌</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Modal transparent visible={showModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Check-In Patient</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient Name"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Reason for Visit"
              value={form.reason}
              onChangeText={(text) => setForm({ ...form, reason: text })}
            />
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setShowModal(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={checkIn}>
                <Text style={{ color: 'white' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WaitingRoom;
