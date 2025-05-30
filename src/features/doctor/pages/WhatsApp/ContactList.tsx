// WhatsApp/ContactList.tsx
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const contacts = [
  { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1', lastMessage: 'Hello John!', time: '10:15' },
  { id: '2', name: 'Dinesh', avatar: 'https://i.pravatar.cc/150?img=2', lastMessage: 'Meeting confirmed', time: '09:30' },
  { id: '3', name: 'Suman Bohra', avatar: 'https://i.pravatar.cc/150?img=3', lastMessage: 'I have checked', time: 'Yesterday' },
];

const ContactList = ({ onSelect, selectedContact }) => {
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={[
              styles.item,
              selectedContact?.id === item.id && styles.selectedItem,
            ]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f0f2f5',
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    color: '#000',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  selectedItem: {
    backgroundColor: '#e0f7fa',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
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
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});

export default ContactList;
