import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Bills.style';

const BillingModal = ({ visible, onClose, patient }) => {
  const [invoiceItems, setInvoiceItems] = useState([{ description: '', qty: '1', unitCost: '0', total: '0' }]);
  const [tax, setTax] = useState('0');
  const [discount, setDiscount] = useState('0');

  const calculateTotal = () => {
    const subtotal = invoiceItems.reduce((sum, item) => sum + (parseInt(item.qty) * parseInt(item.unitCost)), 0);
    return subtotal + parseInt(tax || '0') - parseInt(discount || '0');
  };

  const updateItem = (index, field, value) => {
    const updated = [...invoiceItems];
    updated[index][field] = value;
    updated[index].total = (parseInt(updated[index].qty) * parseInt(updated[index].unitCost)).toString();
    setInvoiceItems(updated);
  };

  const addItem = () => setInvoiceItems([...invoiceItems, { description: '', qty: '1', unitCost: '0', total: '0' }]);
  const removeItem = (index) => setInvoiceItems(invoiceItems.filter((_, i) => i !== index));

  return (
    <Modal visible={visible} animationType="fade">
      <ScrollView style={styles.card}>
        <Text style={styles.sectionTitle}>New Invoice for {patient?.name}</Text>

        {/* Table */}
        <ScrollView horizontal>
          <View style={styles.tableContainer}>
            <View style={styles.tableRowHeader}>
              <View style={styles.tableCellLarge}><Text style={styles.headerText}>Description</Text></View>
              <View style={styles.tableCellSmall}><Text style={styles.headerText}>Qty</Text></View>
              <View style={styles.tableCellMedium}><Text style={styles.headerText}>Unit Cost</Text></View>
              <View style={styles.tableCellMedium}><Text style={styles.headerText}>Total</Text></View>
              <View style={styles.tableCellSmall}><Text style={styles.headerText}>Action</Text></View>
            </View>

            {invoiceItems.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCellLarge}>
                  <TextInput style={styles.inputField} placeholder="Description" value={item.description}
                    onChangeText={(text) => updateItem(index, 'description', text)} />
                </View>
                <View style={styles.tableCellSmall}>
                  <TextInput style={styles.inputField} placeholder="Qty" value={item.qty} keyboardType="numeric"
                    onChangeText={(text) => updateItem(index, 'qty', text)} />
                </View>
                <View style={styles.tableCellMedium}>
                  <TextInput style={styles.inputField} placeholder="Unit Cost" value={item.unitCost} keyboardType="numeric"
                    onChangeText={(text) => updateItem(index, 'unitCost', text)} />
                </View>
                <View style={styles.tableCellMedium}>
                  <TextInput style={styles.inputField} editable={false} value={item.total} />
                </View>
                <View style={styles.tableCellSmall}>
                  <TouchableOpacity onPress={() => removeItem(index)}>
                    <Text style={styles.deleteAction}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <Pressable style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.addItemButtonText}>+ Add Item</Text>
        </Pressable>

        {/* Tax & Discount */}
        <View style={styles.taxDiscountRow}>
          <TextInput style={styles.taxDiscountInput} placeholder="Tax ₹" keyboardType="numeric" value={tax} onChangeText={setTax} />
          <TextInput style={styles.taxDiscountInput} placeholder="Discount ₹" keyboardType="numeric" value={discount} onChangeText={setDiscount} />
        </View>

        <Text style={styles.totalText}>Total: ₹{calculateTotal()}</Text>

        <View style={styles.buttonRow}>
          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
          <Pressable style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save & Print</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default BillingModal;
