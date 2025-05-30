import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import styles from './WhatsAppChatView.style'; // Assuming styles are defined in this file

const WhatsAppChatView = ({ patientId }: { patientId: string }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // Fetch chat history from backend using patientId
  }, []);

  const sendMessage = async () => {
    // Send message to backend
    setMessages(prev => [...prev, { from: 'doctor', text }]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={item.from === 'doctor' ? styles.doctor : styles.patient}>{item.text}</Text>
        )}
        keyExtractor={(_, i) => i.toString()}
      />
      <View style={styles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default WhatsAppChatView;
