import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import styles from './PatientBilling.styles';

const PatientBilling = () => {
  const [invoiceItems, setInvoiceItems] = useState([
    { description: '', qty: '1', unitCost: '0', total: '0' },
  ]);
  const [tax, setTax] = useState('0');
  const [discount, setDiscount] = useState('0');

  // Calculate total invoice amount
  const calculateTotal = () => {
    let subtotal = invoiceItems.reduce((sum, item) => sum + (parseInt(item.qty) * parseInt(item.unitCost)), 0);
    let taxAmount = parseInt(tax) || 0;
    let discountAmount = parseInt(discount) || 0;
    return subtotal + taxAmount - discountAmount;
  };

  const updateItem = (index: number, field: string, value: string) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index][field] = value;
    updatedItems[index].total = (parseInt(updatedItems[index].qty) * parseInt(updatedItems[index].unitCost)).toString();
    setInvoiceItems(updatedItems);
  };

  const addItem = () => {
    setInvoiceItems([...invoiceItems, { description: '', qty: '1', unitCost: '0', total: '0' }]);
  };

  const removeItem = (index: number) => {
    const updatedItems = [...invoiceItems];
    updatedItems.splice(index, 1);
    setInvoiceItems(updatedItems);
  };

  return (
    <ScrollView style={styles.card}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Billing</Text>
        <Pressable style={styles.newInvoiceButton}>
          <Text style={styles.newInvoiceButtonText}>+ New Invoice</Text>
        </Pressable>
      </View>

      {/* Outstanding Balance */}
      <Text style={styles.outstandingBalance}>💰 Outstanding Balance: ₹950</Text>
     {/* Existing Invoices */}
     <View style={styles.invoiceList}>
        <View style={styles.invoiceItem}>
          <Text style={styles.invoiceDate}>April 4, 2025</Text>
          <Text style={styles.invoiceTitle}>Consultation, CT Scan</Text>
          <Text style={styles.invoiceAmountPaid}>₹1800 Paid</Text>
        </View>
        <View style={styles.invoiceItem}>
          <Text style={styles.invoiceDate}>March 15, 2025</Text>
          <Text style={styles.invoiceTitle}>Consultation, Amoxicillin Prescription</Text>
          <Text style={styles.invoiceAmountUnpaid}>₹950 Unpaid</Text>
        </View>
      </View>
      {/* Create Invoice */}
      <View style={styles.newInvoiceSection}>
        <Text style={styles.newInvoiceTitle}>Create New Invoice</Text>

        {/* Table */}
        <ScrollView horizontal>
          <View style={styles.tableContainer}>
            {/* Header Row */}
            <View style={styles.tableRowHeader}>
              <View style={styles.tableCellLarge}><Text style={styles.headerText}>Description</Text></View>
              <View style={styles.tableCellSmall}><Text style={styles.headerText}>Qty</Text></View>
              <View style={styles.tableCellMedium}><Text style={styles.headerText}>Unit Cost</Text></View>
              <View style={styles.tableCellMedium}><Text style={styles.headerText}>Total</Text></View>
              <View style={styles.tableCellSmall}><Text style={styles.headerText}>Action</Text></View>
            </View>

            {/* Invoice Rows */}
            {invoiceItems.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCellLarge}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Description"
                    value={item.description}
                    onChangeText={(text) => updateItem(index, 'description', text)}
                  />
                </View>
                <View style={styles.tableCellSmall}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Qty"
                    keyboardType="numeric"
                    value={item.qty}
                    onChangeText={(text) => updateItem(index, 'qty', text)}
                  />
                </View>
                <View style={styles.tableCellMedium}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Unit Cost"
                    keyboardType="numeric"
                    value={item.unitCost}
                    onChangeText={(text) => updateItem(index, 'unitCost', text)}
                  />
                </View>
                <View style={styles.tableCellMedium}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Total"
                    editable={false}
                    value={item.total}
                  />
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

        {/* + Add Item */}
        <Pressable style={styles.addItemButton} onPress={addItem}>
          <Text style={styles.addItemButtonText}>+ Add Item</Text>
        </Pressable>

        {/* Tax / Discount Row */}
        <View style={styles.taxDiscountRow}>
          <TextInput
            style={styles.taxDiscountInput}
            placeholder="Tax ₹"
            keyboardType="numeric"
            value={tax}
            onChangeText={setTax}
          />
          <TextInput
            style={styles.taxDiscountInput}
            placeholder="Discount ₹"
            keyboardType="numeric"
            value={discount}
            onChangeText={setDiscount}
          />
        </View>

        {/* Total */}
        <Text style={styles.totalText}>Total: ₹{calculateTotal()}</Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <Pressable style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
          <Pressable style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save & Print</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default PatientBilling;
