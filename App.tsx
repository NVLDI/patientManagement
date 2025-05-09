import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorDashboard from './src/features/doctor/pages/Dashboard/DoctorDashboard';
import Calendar from './src/features/doctor/pages/Appointments/Calendar';
import LandingPage from './src/pages/LandingPage/LandingPage';
import NotFound from './src/pages/NotFound/NotFound';

import DoctorLayout from './src/layouts/DoctorLayout';
import AppointmentList from './src/features/doctor/pages/Appointments/AppointmentList';
import PatientRecord from './src/features/doctor/pages/Patients/PatientRecord';
import PatientDetails from './src/features/doctor/pages/Patients/PatientDetails';
import PatientPrescriptionList from './src/features/doctor/pages/Prescriptions/PatientPrescriptionList';
import AnalyticsDashboard from './src/features/doctor/pages/Reports/AnalyticsDashboard';  


import ReceptionDashboard from './src/features/reception/pages/Dashboard/ReceptionDashboard';
import Appointments from './src/features/reception/pages/Appointments/Appointments'; 
import Patients from './src/features/reception/pages/Patients/Patients';
import WaitingRoom from './src/features/reception/pages/WaitingRoom/WaitingRoom';
import Billing from './src/features/reception/pages/Billing/Billing';
import Sidebar from './src/features/reception/pages/SideBar/Sidebar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* Landing Page */}
        <Stack.Screen 
          name="Landing" 
          component={LandingPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="NotFound" 
          component={NotFound} 
          options={{ title: 'Oops!' }} 
        />
        <Stack.Screen
          name="DoctorDashboard"
          component={DoctorDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoctorLayout"
          component={DoctorLayout}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppointmentList"
          component={AppointmentList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientRecord"
          component={PatientRecord}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientDetails"
          component={PatientDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientPrescriptionList"
          component={PatientPrescriptionList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AnalyticsDashboard"
          component={AnalyticsDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReceptionDashboard"
          component={ReceptionDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Appointments"
          component={Appointments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Patients"
          component={Patients}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WaitingRoom"
          component={WaitingRoom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Billing"
          component={Billing}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sidebar"
          component={Sidebar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
