import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports.js';
Amplify.configure(awsExports);

// Super Admin
import SuperLogin from './src/WhiteSquareAuth/super-login.tsx';
import SuperRegister from './src/WhiteSquareAuth/super-register.tsx';
import SuperDashboard from './src/WhiteSquareAuth/super-dashboard.tsx';

// Clinic Login
import ClinicLogin from './src/Clinics/ClinicLoginScreen.tsx';
import ClinicDashboard from './src/Clinics/ClinicDashboard/ClinicDashboard.tsx';
// Landing
import LandingPage from './src/pages/LandingPage/LandingPage.tsx';
import NotFound from './src/pages/NotFound/NotFound.tsx';

// Doctor
import DoctorDashboard from './src/features/doctor/pages/Dashboard/DoctorDashboard.tsx';
import DoctorLayout from './src/layouts/DoctorLayout/DoctorLayout.tsx';
import Calendar from './src/features/doctor/pages/Appointments/Appointment.tsx';
import AppointmentList from './src/features/doctor/pages/Appointments/Appointment.tsx';
import PatientRecord from './src/features/doctor/pages/Patients/PatientRecord.tsx';
import PatientDetails from './src/features/doctor/pages/Patients/PatientDetails.tsx';
import PatientPrescriptionList from './src/features/doctor/pages/Prescriptions/PatientPrescriptionList.tsx';
import AnalyticsDashboard from './src/features/doctor/pages/Reports/AnalyticsDashboard.tsx';
import PatientBills from './src/features/doctor/pages/Bills/Bills.tsx';
import Profile from './src/features/doctor/components/Profile/Profile.tsx';
import Settings from './src/features/doctor/components/Settings/Settings.tsx';

// Reception
import ReceptionDashboard from './src/features/reception/pages/Dashboard/ReceptionDashboard.tsx';
import Appointments from './src/features/reception/pages/Appointments/Appointments.tsx';
import Patients from './src/features/reception/pages/Patients/Patients.tsx';
import WaitingRoom from './src/features/reception/pages/WaitingRoom/WaitingRoom.tsx';
import Billing from './src/features/reception/pages/Billing/Billing.tsx';

// Admin
import AdminSidebar from './src/features/admin/pages/Sidebar/Sidebar.tsx';
import AdminDashboard from './src/features/admin/pages/Dashboard/AdminDashboard.tsx';
import UserManagement from './src/features/admin/pages/UserManagement/UserManagement.tsx';
import SystemConfig from './src/features/admin/pages/SystemConfig/SystemConfig.tsx';
import Reports from './src/features/admin/pages/Reports/Reports.tsx';
import Analytics from './src/features/admin/pages/Analytics/Analytics.tsx';

// Nurse
import NurseDashboard from './src/features/nurse/pages/NurseDashboard/Dashboard.tsx';
import PatientQueue from './src/features/nurse/pages/PatientQueue/PatientQueue.tsx';
import RecentVisits from './src/features/nurse/pages/RecentVisits/RecentVisits.tsx';
import Procedures from './src/features/nurse/pages/Procedures/Procedures.tsx';
import Medications from './src/features/nurse/pages/Medications/Medications.tsx';

const Stack = createNativeStackNavigator();

// 🌐 Linking configuration
const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Landing: '',
      NotFound: 'NotFound',

      // Super Admin
      SuperLogin: 'SuperLogin',
      SuperRegister: 'SuperRegister',
      SuperDashboard: 'SuperDashboard',

      // Clinic Login
      ClinicLogin: 'ClinicLogin',
      ClinicDashboard: 'ClinicDashboard',
      // Doctor
      DoctorDashboard: 'DoctorDashboard',
      DoctorLayout: 'DoctorLayout',
      Calendar: 'Calendar',
      AppointmentList: 'AppointmentList',
      PatientRecord: 'PatientRecord',
      PatientDetails: 'PatientDetails',
      PatientPrescriptionList: 'PatientPrescriptionList',
      AnalyticsDashboard: 'AnalyticsDashboard',
      PatientBills: 'PatientBills',
      Profile: 'Profile',
      Settings: 'Settings',

      // Reception
      ReceptionDashboard: 'ReceptionDashboard',
      Appointments: 'Appointments',
      Patients: 'Patients',
      WaitingRoom: 'WaitingRoom',
      Billing: 'Billing',

      // Admin
      AdminSidebar: 'AdminSidebar',
      AdminDashboard: 'AdminDashboard',
      UserManagement: 'UserManagement',
      SystemConfig: 'SystemConfig',
      Reports: 'Reports',
      Analytics: 'Analytics',

      // Nurse
      NurseDashboard: 'NurseDashboard',
      PatientQueue: 'PatientQueue',
      RecentVisits: 'RecentVisits',
      Procedures: 'Procedures',
      Medications: 'Medications',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFound} options={{ title: 'Oops!' }} />

        {/* Super Admin */}
        <Stack.Screen name="SuperLogin" component={SuperLogin} options={{ headerShown: false }} />
        <Stack.Screen name="SuperRegister" component={SuperRegister} options={{ headerShown: false }} />
        <Stack.Screen name="SuperDashboard" component={SuperDashboard} options={{ headerShown: false }} />

        {/* Clinic Login */}
        <Stack.Screen name="ClinicLogin" component={ClinicLogin} options={{ headerShown: false }} />
        <Stack.Screen name="ClinicDashboard" component={ClinicDashboard} options={{ headerShown: false }} />

        {/* Doctor */}
        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorLayout" component={DoctorLayout} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        <Stack.Screen name="AppointmentList" component={AppointmentList} options={{ headerShown: false }} />
        <Stack.Screen name="PatientRecord" component={PatientRecord} options={{ headerShown: false }} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} options={{ headerShown: false }} />
        <Stack.Screen name="PatientPrescriptionList" component={PatientPrescriptionList} options={{ headerShown: false }} />
        <Stack.Screen name="AnalyticsDashboard" component={AnalyticsDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="PatientBills" component={PatientBills} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />

        {/* Reception */}
        <Stack.Screen name="ReceptionDashboard" component={ReceptionDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Appointments" component={Appointments} options={{ headerShown: false }} />
        <Stack.Screen name="Patients" component={Patients} options={{ headerShown: false }} />
        <Stack.Screen name="WaitingRoom" component={WaitingRoom} options={{ headerShown: false }} />
        <Stack.Screen name="Billing" component={Billing} options={{ headerShown: false }} />

        {/* Admin */}
        <Stack.Screen name="AdminSidebar" component={AdminSidebar} options={{ headerShown: false }} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="UserManagement" component={UserManagement} options={{ headerShown: false }} />
        <Stack.Screen name="SystemConfig" component={SystemConfig} options={{ headerShown: false }} />
        <Stack.Screen name="Reports" component={Reports} options={{ headerShown: false }} />
        <Stack.Screen name="Analytics" component={Analytics} options={{ headerShown: false }} />

        {/* Nurse */}
        <Stack.Screen name="NurseDashboard" component={NurseDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="PatientQueue" component={PatientQueue} options={{ headerShown: false }} />
        <Stack.Screen name="RecentVisits" component={RecentVisits} options={{ headerShown: false }} />
        <Stack.Screen name="Procedures" component={Procedures} options={{ headerShown: false }} />
        <Stack.Screen name="Medications" component={Medications} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
