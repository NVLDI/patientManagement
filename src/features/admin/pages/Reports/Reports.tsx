import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from './Reports.style';

const Reports = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [reportType, setReportType] = useState('All');

  const reports = [
    {
      id: 'patient',
      title: 'Patient Report',
      description: 'Summary of patient registrations and activity logs.',
    },
    {
      id: 'appointments',
      title: 'Appointments Report',
      description: 'Detailed appointment logs with status.',
    },
    {
      id: 'revenue',
      title: 'Revenue Report',
      description: 'Monthly and yearly revenue statistics.',
    },
  ];

  const filteredReports = reportType === 'All'
    ? reports
    : reports.filter(report => report.id === reportType);

  const handleDownload = (type: string, format: 'PDF' | 'CSV') => {
    alert(`Downloading ${type} report as ${format}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reports</Text>

      {/* Filters */}
      <View style={styles.filterRow}>
        <TextInput
          placeholder="From Date (dd-mm-yyyy)"
          value={fromDate}
          onChangeText={setFromDate}
          style={styles.dateInput}
        />
        <TextInput
          placeholder="To Date (dd-mm-yyyy)"
          value={toDate}
          onChangeText={setToDate}
          style={styles.dateInput}
        />
        <TextInput
          placeholder="Report Type (All/patient/appointments/revenue)"
          value={reportType}
          onChangeText={setReportType}
          style={styles.dropdownInput}
        />
        <Button mode="contained" onPress={() => {}} style={styles.filterBtn}>
          Apply Filters
        </Button>
      </View>

      {/* Report Cards */}
      <View style={styles.reportGrid}>
        {filteredReports.map((report) => (
          <View key={report.id} style={styles.reportCard}>
            <Text style={styles.reportTitle}>{report.title}</Text>
            <Text style={styles.reportDescription}>{report.description}</Text>
            <View style={styles.downloadRow}>
              <TouchableOpacity
                style={styles.downloadBtn}
                onPress={() => handleDownload(report.title, 'PDF')}
              >
                <Text style={styles.downloadText}>Download PDF</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.downloadBtn}
                onPress={() => handleDownload(report.title, 'CSV')}
              >
                <Text style={styles.downloadText}>Download CSV</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reports;
