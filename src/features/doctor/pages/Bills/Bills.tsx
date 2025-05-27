import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Modal, Pressable, TouchableOpacity, FlatList } from 'react-native';
import styles from './Bills.style';
import BillingModal from './BillingModal';

const mockPatients = [
  { id: 'P001', name: 'John Doe' },
  { id: 'P002', name: 'Emma Lee' },
  { id: 'P003', name: 'Alex Roy' },
   { id: 'P004', name: 'Alex Roy' },
];

const patientBills = {
  P001: [
    { date: 'April 4, 2025', title: 'Consultation, CT Scan', paid: 1800 },
    { date: 'March 15, 2025', title: 'Consultation, Amoxicillin Prescription', unpaid: 950 },
  ],
  P002: [{ date: 'April 1, 2025', title: 'X-ray & Diagnosis', paid: 1000 }],
};

const Bills = () => {
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const filteredPatients = mockPatients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={styles.card}>
      {/* Search Patient */}
      <Text style={styles.sectionTitle}>Search Patient</Text>
      <TextInput
        placeholder="Enter patient name"
        value={search}
        onChangeText={setSearch}
        style={styles.inputField}
      />
      {search.length > 0 && (
        <FlatList
          data={filteredPatients}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { setSelectedPatient(item); setSearch(''); }}>
              <Text style={{ padding: 8, backgroundColor: '#f0f0f0' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Selected Patient & Billing */}
      {selectedPatient && (
        <>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Billing: {selectedPatient.name}</Text>
            <Pressable style={styles.newInvoiceButton} onPress={() => setIsModalVisible(true)}>
              <Text style={styles.newInvoiceButtonText}>+ New Invoice</Text>
            </Pressable>
          </View>

          <Text style={styles.outstandingBalance}>💰 Outstanding Balance: ₹950</Text>

          {/* Invoice List */}
          <View style={styles.invoiceList}>
            {(patientBills[selectedPatient.id] || []).map((inv, idx) => (
              <View key={idx} style={styles.invoiceItem}>
                <Text style={styles.invoiceDate}>{inv.date}</Text>
                <Text style={styles.invoiceTitle}>{inv.title}</Text>
                {inv.paid && <Text style={styles.invoiceAmountPaid}>₹{inv.paid} Paid</Text>}
                {inv.unpaid && <Text style={styles.invoiceAmountUnpaid}>₹{inv.unpaid} Unpaid</Text>}
              </View>
            ))}
          </View>
        </>
      )}

      {/* Billing Modal */}
      <BillingModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        patient={selectedPatient}
      />
    </ScrollView>
  );
};

export default Bills;
// import styles from './Bills.style';
// import BillingModal from './BillingModal';