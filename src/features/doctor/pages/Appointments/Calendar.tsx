import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  LayoutChangeEvent,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const timeColumnWidth = 80;
const screenWidth = Dimensions.get('window').width;

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'Day' | 'Week' | 'Month'>('Month');
  const [containerWidth, setContainerWidth] = useState(screenWidth);

  const actualDayWidth = (containerWidth - timeColumnWidth) / 7;

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const appointmentDays: Record<string, number> = {
    '2025-05-04': 3,
    '2025-05-12': 2,
    '2025-05-21': 1,
  };

  const getDaysMatrix = (year: number, month: number) => {
    const matrix: (number | null)[][] = [];
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > totalDays) {
          week.push(null);
        } else {
          week.push(day++);
        }
      }
      matrix.push(week);
    }
    return matrix;
  };

  const formatKey = (d: number) =>
    `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

  const handleChangeMonth = (offset: number) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
    setCurrentDate(new Date(newDate));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const matrix = getDaysMatrix(year, month);

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  return (
    <SafeAreaView style={styles.container} onLayout={handleLayout}>
      <StatusBar style="dark" />

      {/* Top Action Buttons */}
      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.switchButton}>
          <View style={styles.switchThumb} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rescheduleButton}>
          <Text style={styles.buttonText}>🔄 Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blockButton}>
          <Text style={styles.buttonText}>⬜ Block Time</Text>
        </TouchableOpacity>
      </View>

      {/* View Mode Switch */}
      <View style={styles.viewSwitcher}>
        {['Day', 'Week', 'Month'].map((mode) => (
          <TouchableOpacity
            key={mode}
            style={[
              styles.viewButton,
              viewMode === mode && styles.viewButtonSelected,
            ]}
            onPress={() => setViewMode(mode as 'Day' | 'Week' | 'Month')}
          >
            <Text style={viewMode === mode ? styles.viewTextSelected : styles.viewText}>
              {mode}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Header with Month Navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleChangeMonth(-1)}>
          <Text style={styles.navText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </Text>
        <TouchableOpacity onPress={() => handleChangeMonth(1)}>
          <Text style={styles.navText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Weekday Header (Month View) */}
      {viewMode === 'Month' && (
        <View style={styles.weekdayRow}>
          {WEEK_DAYS.map((d) => (
            <Text key={d} style={styles.weekdayText}>
              {d}
            </Text>
          ))}
        </View>
      )}

      {/* Month View */}
      {viewMode === 'Month' && (
        <ScrollView>
          {matrix.map((week, weekIdx) => (
            <View key={weekIdx} style={styles.weekRow}>
              {week.map((day, dayIdx) => {
                const key = formatKey(day ?? 1);
                const count = day && appointmentDays[key];

                return (
                  <View
                    key={dayIdx}
                    style={{
                      width: actualDayWidth,
                      aspectRatio: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 0.5,
                      borderColor: '#e0e0e0',
                      backgroundColor: '#fff',
                    }}
                  >
                    {day && (
                      <>
                        <Text style={styles.dayNumber}>{day}</Text>
                        {count && (
                          <Text style={styles.appointmentCount}>
                            {count} Appt{count > 1 ? 's' : ''}
                          </Text>
                        )}
                      </>
                    )}
                  </View>
                );
              })}
            </View>
          ))}
        </ScrollView>
      )}

      {/* Week View */}
      {viewMode === 'Week' && (
        <ScrollView>
          <ScrollView horizontal>
            <View style={styles.weekGrid}>
              {/* Time Column */}
              <View style={styles.timeColumn}>
                <View style={styles.timeHeaderSpacer} />
                {Array.from({ length: 24 }, (_, i) => (
                  <View key={i} style={styles.timeSlot}>
                    <Text style={styles.timeLabel}>
                      {i % 2 === 0 ? `${(8 + i / 2) % 24}:00 ${8 + i / 2 < 12 ? 'AM' : 'PM'}` : ''}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Day Columns with Date */}
              <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                  {Array.from({ length: 7 }, (_, i) => {
                    const d = new Date(startOfWeek);
                    d.setDate(startOfWeek.getDate() + i);
                    const label = `${WEEK_DAYS[d.getDay()]}, ${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`;

                    return (
                      <View
                        key={i}
                        style={{
                          width: actualDayWidth,
                          height: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderLeftWidth: 0.5,
                          borderColor: '#e5e7eb',
                        }}
                      >
                        <Text style={styles.dayHeaderText}>{label}</Text>
                      </View>
                    );
                  })}
                </View>

                {/* Time Slots */}
                <View style={styles.slotGrid}>
                  {Array.from({ length: 24 }, (_, rowIdx) => (
                    <View key={rowIdx} style={styles.slotRow}>
                      {WEEK_DAYS.map((_, colIdx) => (
                        <View
                          key={colIdx}
                          style={{
                            width: actualDayWidth,
                            height: 50,
                            borderLeftWidth: 0.5,
                            borderBottomWidth: 0.5,
                            borderColor: '#e5e7eb',
                            backgroundColor: '#fff',
                          }}
                        />
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      )}

      {/* Day View */}
      {viewMode === 'Day' && (
        <View style={{ flex: 1 }}>
          {/* Date Header */}
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f3f4f6',
              borderBottomWidth: 0.5,
              borderColor: '#ccc',
            }}
          >
            <Text style={styles.dayHeaderText}>
              {currentDate.toLocaleDateString('default', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </Text>
          </View>

          {/* Time Slots */}
          <ScrollView>
            {Array.from({ length: 24 }, (_, i) => (
              <View
                key={i}
                style={{
                  height: 50,
                  borderBottomWidth: 0.5,
                  borderColor: '#e5e7eb',
                  justifyContent: 'center',
                  paddingLeft: 16,
                  backgroundColor: '#fff',
                }}
              >
                <Text style={{ color: '#6b7280' }}>
                  {i % 2 === 0 ? `${(8 + i / 2) % 24}:00 ${8 + i / 2 < 12 ? 'AM' : 'PM'}` : ''}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  topButtons: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  switchButton: {
    width: 40,
    height: 24,
    backgroundColor: '#3a82f7',
    borderRadius: 12,
    marginRight: 8,
    padding: 2,
  },
  switchThumb: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#4caf50',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  rescheduleButton: {
    backgroundColor: '#facc15',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  blockButton: {
    backgroundColor: '#ef4444',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  viewSwitcher: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  viewButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 4,
  },
  viewButtonSelected: {
    backgroundColor: '#3b82f6',
  },
  viewText: {
    color: '#374151',
    fontWeight: '500',
  },
  viewTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  headerText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  navText: { fontSize: 24, color: '#3a82f7' },
  weekdayRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
  },
  weekdayText: {
    width: '14.28%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#444',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayNumber: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  appointmentCount: {
    fontSize: 10,
    marginTop: 2,
    color: '#666',
    textAlign: 'center',
  },
  timeColumn: {
    width: timeColumnWidth,
    backgroundColor: '#f3f4f6',
    alignItems: 'flex-end',
  },
  timeHeaderSpacer: {
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#e5e7eb',
  },
  timeSlot: {
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    paddingRight: 4,
  },
  timeLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  slotGrid: {
    flexDirection: 'column',
  },
  slotRow: {
    flexDirection: 'row',
  },
  dayHeaderText: {
    fontWeight: 'bold',
    color: '#1e293b',
    fontSize: 12,
  },
  weekGrid: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingHorizontal: 8,
  paddingVertical: 12,
  backgroundColor: '#ffffff',
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: '#e0e0e0',
},

});

export default Calendar;
