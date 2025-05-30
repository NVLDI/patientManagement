// WhatsApp/WhatsAppChatView.tsx
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const WhatsAppChatView = ({ contact }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (text.trim()) {
      setMessages([...messages, { id: Date.now().toString(), from: 'doctor', text }]);
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={chatStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text
            style={item.from === 'doctor' ? chatStyles.doctor : chatStyles.patient}
          >
            {item.text}
          </Text>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
      />
      <View style={chatStyles.inputRow}>
        <TextInput
          value={text}
          onChangeText={setText}
          style={chatStyles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f8f9fa',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    color: '#000',
    backgroundColor: '#fff',
  },
  doctor: {
    alignSelf: 'flex-end',
    backgroundColor: '#25d366',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  patient: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0',
    color: '#000',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
});

export default WhatsAppChatView;