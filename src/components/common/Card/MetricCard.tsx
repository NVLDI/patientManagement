// src/components/common/Card/MetricCard.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { metricCardStyles } from './MetricCardStyles.styles';

interface MetricCardProps {
  value: string | number;
  label: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label }) => {
  return (
    <View style={metricCardStyles.card}>
      <Text style={metricCardStyles.value}>{value}</Text>
      <Text style={metricCardStyles.label}>{label}</Text>
    </View>
  );
};