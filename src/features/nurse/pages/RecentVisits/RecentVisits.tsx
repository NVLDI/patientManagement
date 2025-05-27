import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './RecentVisits.style';

const recentVisits = {
  Today: [
    {
      id: 'P001',
      name: 'John Doe',
      description: 'Root canal treatment (08:00 AM)',
      phone: '555-111-2222',
      since: 'Jan 10, 2023',
      amountPaid: 2500,
      prescribed: true,
      procedures: ['Root Canal Treatment', 'Temporary Filling', 'X-ray Verification'],
    },
    {
      id: 'P002',
      name: 'Emma Lee',
      description: 'Scaling and polishing (08:30 AM)',
      phone: '555-222-3333',
      since: 'Feb 15, 2023',
      amountPaid: 1200,
      prescribed: false,
      procedures: ['Oral Prophylaxis', 'Ultrasonic Scaling'],
    },
  ],
  Yesterday: [
    {
      id: 'P003',
      name: 'Michael Brown',
      description: 'Implant placement follow-up (03:00 PM)',
      phone: '555-444-5555',
      since: 'Dec 01, 2022',
      amountPaid: 1800,
      prescribed: false,
      procedures: ['Implant Assessment', 'Suture Removal'],
    },
  ],
};

const RecentVisits = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Visits</Text>
      <View style={styles.card}>
        {Object.entries(recentVisits).map(([section, entries]) => (
          <View key={section} style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>{section}</Text>
            {entries.map((entry) => (
              <View key={entry.id}>
                <TouchableOpacity
                  onPress={() => handleToggle(entry.id)}
                  style={styles.itemButton}
                >
                  <Text style={styles.itemText}>{entry.name} - {entry.description}</Text>
                </TouchableOpacity>

                {expandedId === entry.id && (
                  <View style={styles.detailsBox}>
                    <Text style={styles.detailLine}>🆔 Patient ID: {entry.id}</Text>
                    <Text style={styles.detailLine}>📞 Phone: {entry.phone}</Text>
                    <Text style={styles.detailLine}>🕰️ Since: {entry.since}</Text>
                    <Text style={styles.detailLine}>💰 Amount Paid: ₹{entry.amountPaid}</Text>
                    <Text style={styles.detailLine}>💊 Prescription: {entry.prescribed ? '✅ Yes' : '❌ No'}</Text>
                    <Text style={styles.detailLine}>🛠️ Procedures:</Text>
                    {entry.procedures.map((proc, index) => (
                      <Text key={index} style={styles.instrument}>• {proc}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentVisits;
