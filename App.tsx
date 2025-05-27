import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorDashboard from './src/features/doctor/pages/Dashboard/DoctorDashboard';
import Calendar from './src/features/doctor/pages/Appointments/Calendar';
import LandingPage from './src/pages/LandingPage/LandingPage';
import NotFound from './src/pages/NotFound/NotFound';
//Doctor Dashboard

import DoctorLayout from './src/layouts/DoctorLayout/DoctorLayout';
import AppointmentList from './src/features/doctor/pages/Appointments/AppointmentList';
import PatientRecord from './src/features/doctor/pages/Patients/PatientRecord';
import PatientDetails from './src/features/doctor/pages/Patients/PatientDetails';
import PatientPrescriptionList from './src/features/doctor/pages/Prescriptions/PatientPrescriptionList';
import AnalyticsDashboard from './src/features/doctor/pages/Reports/AnalyticsDashboard';
import PatientBills from './src/features/doctor/pages/Bills/Bills';

// Reception Dashboard
import ReceptionDashboard from './src/features/reception/pages/Dashboard/ReceptionDashboard';
import Appointments from './src/features/reception/pages/Appointments/Appointments'; 
import Patients from './src/features/reception/pages/Patients/Patients';
import WaitingRoom from './src/features/reception/pages/WaitingRoom/WaitingRoom';
import Billing from './src/features/reception/pages/Billing/Billing';

// Admin Dashboard
import AdminSidebar from './src/features/admin/pages/Sidebar/Sidebar';
import AdminDashboard from './src/features/admin/pages/Dashboard/AdminDashboard';
import UserManagement from './src/features/admin/pages/UserManagement/UserManagement';
import SystemConfig from './src/features/admin/pages/SystemConfig/SystemConfig';
import Reports from './src/features/admin/pages/Reports/Reports';
import Analytics from './src/features/admin/pages/Analytics/Analytics';
// Nurse Dashboard

import NurseDashboard from './src/features/nurse/pages/NurseDashboard/Dashboard';
import PatientQueue from './src/features/nurse/pages/PatientQueue/PatientQueue';
import RecentVisits from './src/features/nurse/pages/RecentVisits/RecentVisits';
import Procedures from './src/features/nurse/pages/Procedures/Procedures';
import Medications from './src/features/nurse/pages/Medications/Medications';


import Profile from './src/features/doctor/components/Profile/Profile';
import Settings from './src/features/doctor/components/Settings/Settings';

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
          name="AdminSidebar"
          component={AdminSidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminDashboard"
          component={AdminDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserManagement"
          component={UserManagement}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SystemConfig"
          component={SystemConfig}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reports"
          component={Reports}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Analytics"
          component={Analytics}
          options={{ headerShown: false }}
        />
       
        <Stack.Screen
          name="NurseDashboard"
          component={NurseDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientQueue"
          component={PatientQueue}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecentVisits"
          component={RecentVisits}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Procedures"
          component={Procedures}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Medications"
          component={Medications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PatientBills"
          component={PatientBills}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
