import { useState } from 'react'
import './App.css'
import DashboardLayout from './components/DasboardLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardHome from './components/DashboardHome'
import SettingPage from './components/SettingPage'
import MedicalHistoryPage from './components/MedicalHistoryPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="medicalhistory" element={<MedicalHistoryPage />} />
            <Route path="setting" element={<SettingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
