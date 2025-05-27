import React, { useState } from 'react';
import { View, FlatList, TextInput, Modal, TouchableOpacity } from 'react-native';
import { Text, Button, Switch } from 'react-native-paper';
import styles, { getStatusBadgeStyle } from './UserManagement.style';

const initialUsers = [
  { id: '1', name: 'Dr. Priya Mehta', email: 'priya@clinic.com', role: 'Doctor', status: 'Active' },
  { id: '2', name: 'John Doe', email: 'john@clinic.com', role: 'Receptionist', status: 'Pending' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  const openModal = (user = null) => {
    setEditingUser(user || { name: '', email: '', role: '', status: 'Pending' });
    setModalVisible(true);
  };

  const saveUser = () => {
    if (editingUser.id) {
      setUsers(users.map(u => (u.id === editingUser.id ? editingUser : u)));
    } else {
      setUsers([...users, { ...editingUser, id: Date.now().toString() }]);
    }
    setModalVisible(false);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const filteredUsers = users.filter(u =>
    (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())) &&
    (filter === '' || u.role.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Management System Admin</Text>
      <Text style={styles.subHeader}>User Management</Text>

      {/* Controls */}
      <View style={styles.controls}>
        <TextInput
          placeholder="Search users..."
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        <TextInput
          placeholder="Filter Role"
          value={filter}
          onChangeText={setFilter}
          style={styles.filterInput}
        />
        <Button mode="contained" onPress={() => openModal()} style={styles.addButton}>
          + Add New User
        </Button>
      </View>

      {/* User Table */}
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Name</Text>
            <Text style={styles.tableHeader}>Email</Text>
            <Text style={styles.tableHeader}>Role</Text>
            <Text style={styles.tableHeader}>Status</Text>
            <Text style={styles.tableHeader}>Actions</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.name}</Text>
            <Text style={styles.tableCell}>{item.email}</Text>
            <Text style={styles.tableCell}>{item.role}</Text>
            <Text style={getStatusBadgeStyle(item.status)}>{item.status}</Text>
            <View style={styles.actionsCell}>
              <Switch
                value={item.status === 'Active'}
                onValueChange={() => {
                  const updatedStatus = item.status === 'Active' ? 'Pending' : 'Active';
                  setUsers(users.map(u => (u.id === item.id ? { ...u, status: updatedStatus } : u)));
                }}
              />
              <TouchableOpacity onPress={() => openModal(item)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteUser(item.id)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Modal */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {editingUser?.id ? 'Edit User' : 'Add User'}
            </Text>
            <TextInput
              placeholder="Name"
              value={editingUser?.name || ''}
              onChangeText={text => setEditingUser({ ...editingUser, name: text })}
              style={styles.modalInput}
            />
            <TextInput
              placeholder="Email"
              value={editingUser?.email || ''}
              onChangeText={text => setEditingUser({ ...editingUser, email: text })}
              style={styles.modalInput}
            />
            <TextInput
              placeholder="Role"
              value={editingUser?.role || ''}
              onChangeText={text => setEditingUser({ ...editingUser, role: text })}
              style={styles.modalInput}
            />
            <Button mode="contained" onPress={saveUser} style={styles.modalButton}>
              Save
            </Button>
            <Button onPress={() => setModalVisible(false)} style={styles.modalCancel}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserManagement;
