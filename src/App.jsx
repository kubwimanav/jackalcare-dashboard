import { useState } from 'react'
import './App.css'
import DashboardLayout from './components/DasboardLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardHome from './components/DashboardHome'
import SettingPage from './components/SettingPage'
import MedicalHistoryPage from './components/MedicalHistoryPage'
import AppointmentPage from './components/AppointmentPage'
import ProfilePage from './components/ProfilePage'
import AdminDashHome from './AdminDashboard/AdminDashHome'
import AdminDashboardLayout from './AdminDashboard/AdminDashboardLayout'
import UserManagement from './AdminDashboard/UserManagement'
import Appointment from './AdminDashboard/Apppointment'
import DoctorInstitutionManagement from './AdminDashboard/DoctorInstitutionManagement'
import Payments from './AdminDashboard/Payments'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="medicalhistory" element={<MedicalHistoryPage />} />
            <Route path="appointment" element={<AppointmentPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="setting" element={<SettingPage />} />
          </Route>

          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route index element={<AdminDashHome />} />
            <Route path="user" element={<UserManagement />} />
            <Route path="adminappointment" element={<Appointment />} />
            <Route
              path="doctorinstitution"
              element={<DoctorInstitutionManagement />}
            />
            <Route
              path="payment"
              element={<Payments/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
