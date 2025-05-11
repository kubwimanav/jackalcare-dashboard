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
import SettingAdmin from './AdminDashboard/SettingAdmin'
import ReportAnaltics from './AdminDashboard/ReportAnaltics'
import SupportFeedback from './AdminDashboard/SupportFeedback'
import PaymentPortal from './components/PaymentPortal'
import LandingpageLayout from './landingpage/LandingpageLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingpageLayout />}></Route>

          <Route path="/patient" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="medicalhistory" element={<MedicalHistoryPage />} />
            <Route path="appointment" element={<AppointmentPage />}></Route>
            <Route path="portal" element={<PaymentPortal />} />

            <Route path="profile" element={<ProfilePage />} />
            <Route path="setting" element={<SettingPage />} />
          </Route>

          <Route path="/admin" element={<AdminDashboardLayout />}>
            <Route index element={<AdminDashHome />} />
            <Route path="adminhome" element={<AdminDashHome />} />
            <Route path="user" element={<UserManagement />} />
            <Route path="adminappointment" element={<Appointment />} />
            <Route
              path="doctorinstitution"
              element={<DoctorInstitutionManagement />}
            />
            <Route path="payment" element={<Payments />} />
            <Route path="support" element={<SupportFeedback />} />
            <Route path="report" element={<ReportAnaltics />} />
            <Route path="adminsetting" element={<SettingAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
