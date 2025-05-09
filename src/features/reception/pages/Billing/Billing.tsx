import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import useStyles from './Billing.style';

const Billing = () => {
  const styles = useStyles();

  const [modal, setModal] = useState<'invoice' | 'payment' | 'insurance' | null>(null);
  const [form, setForm] = useState({ amount: '', patient: '', method: '', policy: '' });

  const closeModal = () => {
    setModal(null);
    setForm({ amount: '', patient: '', method: '', policy: '' });
  };

  const renderModal = () => {
    if (!modal) return null;

    let title = '';
    if (modal === 'invoice') title = 'Create Invoice';
    else if (modal === 'payment') title = 'Process Payment';
    else if (modal === 'insurance') title = 'Insurance Claim';

    return (
      <Modal transparent animationType="fade" visible={!!modal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{title}</Text>

            <TextInput
              style={styles.input}
              placeholder="Patient Name"
              value={form.patient}
              onChangeText={(text) => setForm({ ...form, patient: text })}
            />

            {modal === 'invoice' && (
              <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={form.amount}
                onChangeText={(text) => setForm({ ...form, amount: text })}
              />
            )}

            {modal === 'payment' && (
              <TextInput
                style={styles.input}
                placeholder="Payment Method"
                value={form.method}
                onChangeText={(text) => setForm({ ...form, method: text })}
              />
            )}

            {modal === 'insurance' && (
              <TextInput
                style={styles.input}
                placeholder="Policy Number"
                value={form.policy}
                onChangeText={(text) => setForm({ ...form, policy: text })}
              />
            )}

            <View style={styles.modalActions}>
              <Pressable style={styles.cancelBtn} onPress={closeModal}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable style={styles.saveBtn} onPress={closeModal}>
                <Text style={{ color: 'white' }}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Billing</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.invoiceBtn} onPress={() => setModal('invoice')}>
          <Text style={styles.btnText}>🧾 Create Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={() => setModal('payment')}>
          <Text style={styles.btnText}>💳 Process Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.insuranceBtn} onPress={() => setModal('insurance')}>
          <Text style={styles.btnText}>🏥 Insurance Claims</Text>
        </TouchableOpacity>
      </View>

      {renderModal()}
    </View>
  );
};

export default Billing;
