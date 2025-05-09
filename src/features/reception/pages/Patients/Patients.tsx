import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import useStyles from './Patients.style';

const Patients = () => {
  const styles = useStyles();

  const [patients, setPatients] = useState([
    { id: 'P001', name: 'James Wilson', phone: '555-123-4567', email: 'james@example.com', insurance: 'Blue Cross' },
    { id: 'P002', name: 'Sarah Johnson', phone: '555-987-6543', email: '', insurance: '' },
    { id: 'P003', name: 'Robert Chen', phone: '555-555-1212', email: '', insurance: '' },
  ]);

  const [search, setSearch] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', insurance: '' });
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  const registerPatient = () => {
    if (form.name && form.phone) {
      const newId = 'P' + String(patients.length + 1).padStart(3, '0');
      setPatients([...patients, { id: newId, ...form }]);
      setForm({ name: '', phone: '', email: '', insurance: '' });
      setShowRegisterModal(false);
    }
  };

  const saveEdit = () => {
    const index = patients.findIndex((p) => p.id === selectedPatient.id);
    if (index !== -1) {
      const updated = [...patients];
      updated[index] = selectedPatient;
      setPatients(updated);
      setShowEditModal(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.registerBtn} onPress={() => setShowRegisterModal(true)}>
          <Text style={styles.btnText}>➕ Register New</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Search..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Patient List */}
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.patientItem}>
            <View>
              <Text style={styles.patientName}>{item.name}</Text>
              <Text style={styles.patientSub}>ID: {item.id} | Phone: {item.phone}</Text>
            </View>
            <TouchableOpacity onPress={() => {
              setSelectedPatient(item);
              setShowEditModal(true);
            }}>
              <Text style={styles.editLink}>✏️ Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Register Modal */}
      <Modal transparent visible={showRegisterModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Register New Patient</Text>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={form.name}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Insurance Provider"
              value={form.insurance}
              onChangeText={(text) => setForm({ ...form, insurance: text })}
            />
            <View style={styles.modalActions}>
              <Pressable style={styles.modalCancel} onPress={() => setShowRegisterModal(false)}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalSave} onPress={registerPatient}>
                <Text style={{ color: 'white' }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Edit Modal */}
      <Modal transparent visible={showEditModal} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Patient Info</Text>
            <TextInput
              style={styles.input}
              value={selectedPatient?.name}
              onChangeText={(text) => setSelectedPatient({ ...selectedPatient, name: text })}
            />
            <TextInput
              style={styles.input}
              value={selectedPatient?.phone}
              onChangeText={(text) => setSelectedPatient({ ...selectedPatient, phone: text })}
            />
            <TextInput
              style={styles.input}
              value={selectedPatient?.email}
              onChangeText={(text) => setSelectedPatient({ ...selectedPatient, email: text })}
            />
            <TextInput
              style={styles.input}
              value={selectedPatient?.insurance}
              onChangeText={(text) => setSelectedPatient({ ...selectedPatient, insurance: text })}
            />
            <View style={styles.modalActions}>
              <Pressable style={styles.modalCancel} onPress={() => setShowEditModal(false)}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalSave} onPress={saveEdit}>
                <Text style={{ color: 'white' }}>Update</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Patients;
