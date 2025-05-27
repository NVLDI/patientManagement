import React from 'react';
import { View, ScrollView } from 'react-native';
import { MetricCard } from '../../../../components/common/Card/MetricCard';
import { doctorDashboardStyles } from './DoctorDashboard.styles';
import Segment from '../../../../components/common/Section/SegmentPage';


const DoctorDashboard: React.FC = () => {
  return (
    <View style={doctorDashboardStyles.container}>
      {/* Layout with NavBar on the left */}
        <View style={doctorDashboardStyles.mainContent}>
          {/* Scrollable content */}
          <ScrollView>
            <View style={doctorDashboardStyles.metricsContainer}>
              <View style={doctorDashboardStyles.metricItem}>
                <MetricCard value={12} label="Today's Appointments" />
              </View>
              <View style={doctorDashboardStyles.metricItem}>
                <MetricCard value={3} label="Waiting Patients" />
              </View>
              <View style={doctorDashboardStyles.metricItem}>
                <MetricCard value="85%" label="Patient Satisfaction" />
              </View>
            </View>
            {/* Appointments & Activity Section */}
            <Segment />
          </ScrollView>
        </View>
    </View>
  );
};

export default DoctorDashboard;