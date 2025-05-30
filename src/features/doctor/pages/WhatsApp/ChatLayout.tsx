// WhatsApp/ChatLayout.tsx
import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import ContactList from './ContactList';
import ChatView from './ChatView';
import styles from './ChatLayout.style';

const ChatLayout = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const isWideScreen = Dimensions.get('window').width > 768;

  return (
    <View style={styles.container}>
      <View style={styles.contactPane}>
        <ContactList onSelect={setSelectedContact} selectedContact={selectedContact} />
      </View>
      <View style={styles.chatPane}>
        <ChatView contact={selectedContact} />
      </View>
    </View>
  );
};

export default ChatLayout;