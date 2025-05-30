import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import styles from './PatientDetailModal.style';

const getToday = () => new Date().toISOString().split('T')[0];

const PatientDetailModal = ({ visible, onClose, patient, bills }) => {
  const [items, setItems] = useState([
    { date: getToday(), description: '', unitCost: '', mode: 'Cash' },
  ]);
  const [tax, setTax] = useState('');
  const [discount, setDiscount] = useState('');
  const [showDateIndex, setShowDateIndex] = useState(null);

  const addItem = () => {
    setItems([...items, { date: getToday(), description: '', unitCost: '', mode: 'Cash' }]);
  };

  const removeItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const subtotal = items.reduce((sum, item) => {
    const u = parseFloat(item.unitCost) || 0;
    return sum + u;
  }, 0);

  const total =
    subtotal +
    (parseFloat(tax) || 0) -
    (parseFloat(discount) || 0);

  const exportToPDF = async () => {
  const invoiceNumber = `INV-${Date.now()}`;
  const currentDate = new Date().toLocaleDateString('en-IN');
  const logoUrl = 'https://yourclinic.com/logo.png'; // Replace with real clinic logo
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=upi://pay?pa=abcd@upi'; // Replace with real UPI or clinic QR

  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 30px;
            color: #333;
          }
          .header {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 12px;
            margin-bottom: 24px;
          }
          .header img {
            height: 60px;
            margin-right: 20px;
          }
          .clinic-info h1 {
            margin: 0;
            font-size: 22px;
            color: #1f2937;
          }
          .clinic-info p {
            margin: 4px 0;
            font-size: 14px;
          }
          .patient-info, .invoice-section {
            margin-bottom: 24px;
          }
          h2, h3 {
            color: #3b82f6;
            margin-bottom: 8px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;
          }
          th {
            background-color: #3b82f6;
            color: white;
            padding: 10px;
            font-size: 14px;
            text-align: left;
          }
          td {
            padding: 10px;
            border: 1px solid #ddd;
            font-size: 13px;
          }
          .summary {
            text-align: right;
            margin-top: 16px;
            font-size: 16px;
            font-weight: bold;
          }
          .signature-section {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .signature-box {
            width: 180px;
            height: 60px;
            border-top: 1px solid #999;
            text-align: center;
            font-size: 12px;
          }
          .qr img {
            height: 100px;
            margin-top: 4px;
          }
          .footer {
            margin-top: 40px;
            font-size: 12px;
            text-align: center;
            color: #777;
            border-top: 1px solid #ccc;
            padding-top: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="${logoUrl}" alt="Clinic Logo" />
          <div class="clinic-info">
            <h1>ABC Dental Clinic</h1>
            <p><strong>Invoice #: </strong>${invoiceNumber}</p>
            <p><strong>Date: </strong>${currentDate}</p>
          </div>
        </div>

        <div class="patient-info">
          <h2>Patient Information</h2>
          <p><strong>Name:</strong> ${patient.name}</p>
          <p><strong>DOB:</strong> ${patient.dob} | <strong>Gender:</strong> ${patient.gender}</p>
        </div>

        <div class="invoice-section">
          <h3>Invoice Details</h3>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Description</th>
                <th>Unit Cost</th>
                <th>Payment Mode</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${item.date}</td>
                  <td>${item.description}</td>
                  <td>₹${item.unitCost}</td>
                  <td>${item.mode}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <p class="summary">Total Amount: ₹${total.toFixed(2)}</p>
        </div>

        <div class="signature-section">
          <div class="signature-box">Authorized Signature</div>
          <div class="qr">
            <img src="${qrUrl}" alt="QR Code" />
            <p style="font-size: 12px; text-align: center;">Scan to Pay</p>
          </div>
        </div>

        <div class="footer">
          ABC Dental Clinic · 123 Smile Street · Chennai, TN<br/>
          Phone: +91-98765-43210 · Email: info@abcdental.com
        </div>
      </body>
    </html>
  `;

  const { uri } = await Print.printToFileAsync({ html });
  await Sharing.shareAsync(uri);
};



  if (!patient) return null;

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Pressable style={styles.closeIcon} onPress={onClose}>
              <Ionicons name="close" size={24} color="#374151" />
            </Pressable>

            <Text style={styles.modalTitle}>{patient.name}</Text>
            <Text style={styles.detailText}>DOB: {patient.dob}</Text>
            <Text style={styles.detailText}>Gender: {patient.gender}</Text>

            <Text style={[styles.detailText, { marginTop: 12, fontWeight: 'bold' }]}>Invoices:</Text>
            <ScrollView style={{ maxHeight: 150, marginTop: 8 }}>
              {(bills || []).map((inv, idx) => (
                <View key={idx} style={styles.invoiceItem}>
                  <Text>{inv.date}</Text>
                  <Text>{inv.title}</Text>
                  {inv.paid && <Text style={{ color: 'green' }}>₹{inv.paid} Paid</Text>}
                  {inv.unpaid && <Text style={{ color: 'red' }}>₹{inv.unpaid} Unpaid</Text>}
                </View>
              ))}
            </ScrollView>

            <Text style={[styles.detailText, { fontWeight: 'bold', marginTop: 16 }]}>Create New Invoice</Text>

            <ScrollView style={styles.createInvoiceScroll}>
              {items.map((item, idx) => (
                <View key={idx} style={styles.tableRow}>
                  {/* S.No */}
                  <View style={styles.serialCell}>
                    <Text style={{ fontWeight: '600' }}>{idx + 1}.</Text>
                  </View>

                  {/* Date Picker */}
                  <TouchableOpacity
                    onPress={() => setShowDateIndex(idx)}
                    style={styles.tableCellSmallInput}
                  >
                    <Text>{item.date || 'Select Date'}</Text>
                  </TouchableOpacity>
                  {showDateIndex === idx && (
                    <DateTimePicker
                      value={item.date ? new Date(item.date) : new Date()}
                      mode="date"
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={(event, selectedDate) => {
                        setShowDateIndex(null);
                        if (selectedDate) {
                          updateItem(idx, 'date', selectedDate.toISOString().split('T')[0]);
                        }
                      }}
                    />
                  )}

                  {/* Description */}
                  <TextInput
                    placeholder="Description"
                    value={item.description}
                    onChangeText={(text) => updateItem(idx, 'description', text)}
                    style={styles.tableCellLarge}
                  />

                  {/* Unit Cost */}
                  <TextInput
                    placeholder="Unit Cost"
                    value={item.unitCost}
                    onChangeText={(text) => updateItem(idx, 'unitCost', text)}
                    keyboardType="numeric"
                    style={styles.tableCellMedium}
                  />

                  {/* Mode of Payment */}
                  <View style={styles.pickerCell}>
                    <Picker
                      selectedValue={item.mode}
                      onValueChange={(value) => updateItem(idx, 'mode', value)}
                      style={styles.picker}
                    >
                      <Picker.Item label="Cash" value="Cash" />
                      <Picker.Item label="UPI" value="UPI" />
                      <Picker.Item label="Card" value="Card" />
                      <Picker.Item label="Net Banking" value="Net Banking" />
                    </Picker>
                  </View>

                  {/* Delete */}
                  {items.length > 1 && (
                    <TouchableOpacity onPress={() => removeItem(idx)} style={styles.tableCellSmall}>
                      <Text style={styles.deleteAction}>×</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity onPress={addItem} style={styles.addItemButton}>
              <Text style={styles.addItemButtonText}>+ Add Item</Text>
            </TouchableOpacity>

            <View style={styles.taxDiscountRow}>
              <TextInput
                placeholder="Tax"
                value={tax}
                onChangeText={setTax}
                keyboardType="numeric"
                style={styles.taxDiscountInput}
              />
              <TextInput
                placeholder="Discount"
                value={discount}
                onChangeText={setDiscount}
                keyboardType="numeric"
                style={styles.taxDiscountInput}
              />
            </View>

            <Text style={styles.totalText}>Total: ₹{total.toFixed(2)}</Text>

            <View style={styles.buttonRow}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => {
                  setItems([{ date: getToday(), description: '', unitCost: '', mode: 'Cash' }]);
                  setTax('');
                  setDiscount('');
                }}
              >
                <Text style={styles.cancelButtonText}>Clear</Text>
              </Pressable>
              <Pressable style={styles.saveButton} onPress={exportToPDF}>
                <Text style={styles.saveButtonText}>Export PDF</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default PatientDetailModal;
