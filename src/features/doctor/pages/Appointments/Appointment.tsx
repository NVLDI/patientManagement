// AppointmentCalendarToggle.tsx
import React, { useState, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, ScrollView, SafeAreaView, Dimensions, LayoutChangeEvent,TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './Appointment.style';
import AppointmentModal from '../../../../components/common/Modals/AppointmentModal';
const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const rawAppointments = [
  { date: '2025-05-28', time: '09:00 AM', name: 'James Wilson', type: 'General Checkup', status: 'Completed' },
  { date: '2025-05-28', time: '10:30 AM', name: 'Sarah Johnson', type: 'Follow-up', status: 'Waiting' },
  { date: '2025-05-30', time: '12:00 PM', name: 'Robert Chen', type: 'Lab Results', status: 'Confirmed' },
  { date: '2025-05-30', time: '12:00 PM', name: 'Robert Chen', type: 'Lab Results', status: 'Confirmed' },
  { date: '2025-05-30', time: '12:00 PM', name: 'Robert Chen', type: 'Lab Results', status: 'Confirmed' },
  { date: '2025-05-30', time: '12:00 PM', name: 'Robert Chen', type: 'Lab Results', status: 'Confirmed' },
  { date: '2025-05-30', time: '12:00 PM', name: 'Robert Chen', type: 'Lab Results', status: 'Confirmed' },

];

const Appointment: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'Day' | 'Week' | 'Month'>('Month');
  const [containerWidth, setContainerWidth] = useState(Dimensions.get('window').width);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewStartDate, setViewStartDate] = useState(new Date());
  const timeColumnWidth = 80;
  const actualDayWidth = (containerWidth - timeColumnWidth) / 7;
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
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
    `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

  const handleChangeMonth = (offset: number) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
    setCurrentDate(new Date(newDate));
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  const filterAppointments = () => {
    const start = new Date(viewStartDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    return rawAppointments
      .filter(({ name, date }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        date.includes(searchQuery)
      )
      .filter(({ date }) => {
        const apptDate = new Date(date);
        return apptDate >= start && apptDate <= end;
      })
      .reduce((groups, appt) => {
        const apptDate = new Date(appt.date);
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const isSameDay = (a: Date, b: Date) =>
          a.toDateString() === b.toDateString();

        let key = 'Upcoming';
        if (isSameDay(apptDate, today)) key = 'Today';
        else if (isSameDay(apptDate, tomorrow)) key = 'Tomorrow';

        groups[key] = groups[key] || [];
        groups[key].push(appt);
        return groups;
      }, {} as Record<string, typeof rawAppointments>);
  };
  const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

  const getLabel = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    if (isSameDay(date, today)) return 'Today';
    if (isSameDay(date, tomorrow)) return 'Tomorrow';
    return date.toLocaleDateString('default', { weekday: 'long', month: 'short', day: 'numeric' });
  };

  const get7DayAppointments = () => {
    const start = new Date(viewStartDate);
    const days: Record<string, typeof rawAppointments> = {};
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const label = getLabel(d);
      days[label] = [];
    }
    rawAppointments.forEach(appt => {
      const apptDate = new Date(appt.date);
      for (let i = 0; i < 7; i++) {
        const d = new Date(viewStartDate);
        d.setDate(d.getDate() + i);
        if (isSameDay(apptDate, d)) {
          const label = getLabel(d);
          if (
            appt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            appt.date.includes(searchQuery)
          ) {
            days[label].push(appt);
          }
        }
      }
    });
    return days;
  };

  const appointmentGroups = get7DayAppointments();
  return (
    <>
    
    <AppointmentModal
  visible={modalVisible}
  data={selectedAppointment}
  onClose={() => setModalVisible(false)}
/>
    <SafeAreaView style={styles.container} onLayout={handleLayout}>
      <StatusBar style="dark" />
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Appointments</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setShowCalendar(!showCalendar)}
          >
            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff' }} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.greenButton}>
            <Ionicons name="add" size={16} color="white" />
            <Text style={styles.buttonText}> Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellowButton}>
            <Ionicons name="refresh" size={16} color="white" />
            <Text style={styles.buttonText}> Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.redButton}>
            <Ionicons name="remove-circle" size={16} color="white" />
            <Text style={styles.buttonText}> Block Time</Text>
          </TouchableOpacity>
        </View>
      </View>

      {!showCalendar ? (
        <>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => setViewStartDate(prev => {
              const newDate = new Date(prev);
              newDate.setDate(newDate.getDate() - 7);
              return newDate;
            })}>
              <Ionicons name="arrow-back" size={20} color="#2563eb" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setViewStartDate(prev => {
              const newDate = new Date(prev);
              newDate.setDate(newDate.getDate() + 7);
              return newDate;
            })}>
              <Ionicons name="arrow-forward" size={20} color="#2563eb" />
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Search by name or date"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{
              margin: 16,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 8,
              borderColor: '#ccc',
              borderWidth: 1,
            }}
          />

          <ScrollView>
            {Object.entries(appointmentGroups).map(([label, group]) => (
              <View key={label} style={styles.appointmentCard}>
                <Text style={styles.sectionTitle}>{label}</Text>
                {group.length > 0 ? (
                  group.map((appt, idx) => (
                    <TouchableOpacity key={idx} style={styles.appointmentRow}
                      onPress={() => {setSelectedAppointment({...appt,note: 'Prescribed multivitamins on last visit.',});setModalVisible(true);}}>
                      <View>
                        <Text style={styles.appointmentTime}>{`${appt.date} ${appt.time} - ${appt.name}`}</Text>
                        <Text style={styles.appointmentType}>{appt.type}</Text>
                      </View>
                      <View style={[styles.statusBadge, styles[`status${appt.status}`]]}>
                        <Text style={styles.statusText}>{appt.status}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={{ color: '#888', paddingVertical: 6 }}>No appointments</Text>
                )}
              </View>
            ))}
          </ScrollView>
        </>
      ) : (
        <>
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

          <View style={styles.header}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => handleChangeMonth(-1)}>
      <Text style={styles.navText}>←</Text>
    </TouchableOpacity>
    <Text style={[styles.headerText, { marginHorizontal: 8 }]}>
      {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
    </Text>
    <TouchableOpacity onPress={() => handleChangeMonth(1)}>
      <Text style={styles.navText}>→</Text>
    </TouchableOpacity>
  </View>
</View>
          {viewMode === 'Month' && (
            <>
              <View style={styles.weekdayRow}>
                {WEEK_DAYS.map((d) => (
                  <Text key={d} style={styles.weekdayText}>{d}</Text>
                ))}
              </View>
              <ScrollView>
                {getDaysMatrix(currentDate.getFullYear(), currentDate.getMonth()).map((week, i) => (
                  <View key={i} style={styles.weekRow}>
                    {week.map((day, j) => {
                      const key = formatKey(day ?? 1);
                      const count = day && appointmentDays[key];
                      return (
                        <View
                          key={j}
                          style={{ width: actualDayWidth, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#e0e0e0', backgroundColor: '#fff' }}
                        >
                          {day && <><Text style={styles.dayNumber}>{day}</Text>{count && <Text style={styles.appointmentCount}>{count} Appt{count > 1 ? 's' : ''}</Text>}</>}
                        </View>
                      );
                    })}
                  </View>
                ))}
              </ScrollView>
            </>
          )}

          {viewMode === 'Week' && (
            <ScrollView horizontal>
              <View style={styles.weekGrid}>
                <View style={styles.timeColumn}>
                  <View style={styles.timeHeaderSpacer} />
                  {Array.from({ length: 24 }, (_, i) => (
                    <View key={i} style={styles.timeSlot}>
                      <Text style={styles.timeLabel}>{i % 2 === 0 ? `${(8 + i / 2) % 24}:00 ${8 + i / 2 < 12 ? 'AM' : 'PM'}` : ''}</Text>
                    </View>
                  ))}
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row' }}>
                    {Array.from({ length: 7 }, (_, i) => {
                      const d = new Date(startOfWeek);
                      d.setDate(startOfWeek.getDate() + i);
                      const label = `${WEEK_DAYS[d.getDay()]}, ${d.getDate()} ${d.toLocaleString('default', { month: 'short' })}`;
                      return (
                        <View
                          key={i}
                          style={{ width: actualDayWidth, height: 40, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 0.5, borderColor: '#e5e7eb' }}
                        >
                          <Text style={styles.dayHeaderText}>{label}</Text>
                        </View>
                      );
                    })}
                  </View>
                  <View style={styles.slotGrid}>
                    {Array.from({ length: 24 }, (_, rowIdx) => (
                      <View key={rowIdx} style={styles.slotRow}>
                        {WEEK_DAYS.map((_, colIdx) => (
                          <View
                            key={colIdx}
                            style={{ width: actualDayWidth, height: 50, borderLeftWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#e5e7eb', backgroundColor: '#fff' }}
                          />
                        ))}
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </ScrollView>
          )}

          {viewMode === 'Day' && (
            <ScrollView>
              <View style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6', borderBottomWidth: 0.5, borderColor: '#ccc' }}>
                <Text style={styles.dayHeaderText}>{currentDate.toLocaleDateString('default', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</Text>
              </View>
              {Array.from({ length: 24 }, (_, i) => (
                <View
                  key={i}
                  style={{ height: 50, borderBottomWidth: 0.5, borderColor: '#e5e7eb', justifyContent: 'center', paddingLeft: 16, backgroundColor: '#fff' }}
                >
                  <Text style={{ color: '#6b7280' }}>{i % 2 === 0 ? `${(8 + i / 2) % 24}:00 ${8 + i / 2 < 12 ? 'AM' : 'PM'}` : ''}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </>
      )}
    </SafeAreaView>
</>
  );
};

export default Appointment;
