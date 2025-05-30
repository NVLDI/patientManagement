// WhatsApp/ContactList.tsx
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1', lastMessage: 'Hello John!', time: '10:15' },
  { id: '2', name: 'Dinesh', avatar: 'https://i.pravatar.cc/150?img=2', lastMessage: 'Meeting confirmed', time: '09:30' },
  { id: '3', name: 'Suman Bohra', avatar: 'https://i.pravatar.cc/150?img=3', lastMessage: 'I have checked', time: 'Yesterday' },
];

const ContactList = ({ onSelect, selectedContact }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={[styles.item, selectedContact?.id === item.id && styles.selectedItem]}
        >
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.textColumn}>
            <View style={styles.topRow}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.message}>{item.lastMessage}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f8f9fa',
  },
  selectedItem: {
    backgroundColor: '#e4e6eb',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  textColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: '#555',
    fontSize: 12,
  },
  message: {
    color: '#333',
    fontSize: 14,
    marginTop: 4,
  },
});

export default ContactList;