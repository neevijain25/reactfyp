import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Account from './pages/Account';

// Sample data structure (simulating MongoDB data)
export const sampleData = {
  student: {
    name: "Neevi Jain",
    rollNo: "T037",
    sapId: "57498230040",
    semester: "V",
    department: "I.T.",
    dateOfBirth: "25-07-2007",
    religion: "HINDU",
    bloodGroup: "A+",
    motherTongue: "HINDI",
    email: "neevijain61@gmail.com",
    phone: "877939XXXX",
    address: "Ivory Tower,Prabhdevi west,Mumbai-400025",
    profileImage: null
  },
  college: {
    name: "SHRI VILE PARLE KELAVANI MANDAL'S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & COLLEGE OF ENGINEERING",
    logo: "SVKM"
  },
  notifications: [
    {
      id: 1,
      title: "Assignment Due",
      message: "Database Management assignment due tomorrow",
      date: "2025-08-17",
      read: false
    },
    {
      id: 2,
      title: "Exam Schedule",
      message: "Mid-term exams start from 25th August",
      date: "2025-08-15",
      read: true
    },
    {
      id: 3,
      title: "Holiday Notice",
      message: "College will remain closed on Independence Day",
      date: "2025-08-14",
      read: true
    }
  ],
  attendance: {
    totalClasses: 45,
    attendedClasses: 42,
    percentage: 93.3
  },
  subjects: [
    { name: "Database Management", attendance: 95 },
    { name: "Software Engineering", attendance: 88 },
    { name: "Data Structures", attendance: 92 },
    { name: "Web Development", attendance: 97 },
    { name: "Computer Networks", attendance: 89 }
  ]
};

//Timetable
export const timetables = {
  "I": [
    {
      day: "Monday",
      subjects: [
        { time: "08:00-09:00", subject: "EMT(CL)", faculty: "AAS", room: "CR204" },
        { time: "09:00-10:00", subject: "EMT(CL)", faculty: "AAS", room: "CR204" },
        { time: "10:00-11:00", subject: "T1-PRC(LL)", faculty: "KVB", room: "Lab 1" },
        { time: "11:00-12:00", subject: "T2-FCS(LL)", faculty: "RSP", room: "IE2 Lab" },
        { time: "12:00-01:00", subject: "RECESS" },
        { time: "01:00-02:00", subject: "FCS(CL)", faculty: "RSP", room: "CR204" },
        { time: "02:00-03:00", subject: "UHV(CL)", faculty: "AVM", room: "CR204" },
        { time: "03:00-04:00", subject: "UHV(CL)", faculty: "AVM", room: "CR204" },
      ],
    },
    {
      day: "Tuesday",
      subjects: [
        { time: "08:00-09:00", subject: "EMT(CL)", faculty: "AAS", room: "CR204" },
        { time: "09:00-10:00", subject: "EMT(CL)", faculty: "AAS", room: "CR204" },
        { time: "10:00-11:00", subject: "CMS(CL)", faculty: "RSP", room: "CR204" },
        { time: "11:00-12:00", subject: "RECESS" },
        { time: "12:00-01:00", subject: "T2-PRC(LL)", faculty: "KVB", room: "Lab 1" },
        { time: "01:00-02:00", subject: "T1-FCS(LL)", faculty: "RSP", room: "Lab 3" },
        { time: "02:00-03:00", subject: "FCS(CL)", faculty: "RSP", room: "CR204" },
        { time: "03:00-04:00", subject: "T2-ENG(LL)", faculty: "PDR", room: "Lab 2" }
      ],
    },
    {
      day: "Wednesday",
      subjects: [
        { time: "08:00-09:00", subject: "UHV(TL)", faculty: "KVB", room: "CR204" },
        { time: "09:00-10:00", subject: "Library" },
        { time: "10:00-11:00", subject: "T2-PRC(LL)", faculty: "KVB", room: "Lab 1" },
        { time: "11:00-12:00", subject: "T1-ENG(LL)", faculty: "PDR", room: "Lab 1" },
        { time: "12:00-01:00", subject: "RECESS" },
        { time: "01:00-02:00", subject: "CMS(CL)", faculty: "RSP", room: "CR204" },
        { time: "02:00-03:00", subject: "T1-BEX(LL)", faculty: "ABD", room: "BEE LAB" },
        { time: "03:00-04:00", subject: "T2-ENG(LL)", faculty: "PDR", room: "Lab 2" }
      ],
    },
    {
      day: "Thursday",
      subjects: [
        { time: "08:00-09:00", subject: "Library" },
        { time: "09:00-10:00", subject: "ENG(CL)", faculty: "PDR", room: "CR204" },
        { time: "10:00-11:00", subject: "ENG(CL)", faculty: "PDR", room: "CR204" },
        { time: "11:00-12:00", subject: "RECESS" },
        { time: "12:00-01:00", subject: "T1-PRC(LL)", faculty: "KVB", room: "Lab 1" },
        { time: "01:00-02:00", subject: "BEX(CL)", faculty: "ABD", room: "CR204" },
        { time: "02:00-03:00", subject: "CMS(CL)", faculty: "RSP", room: "CR204" },
        { time: "03:00-04:00", subject: "BEX(CL)", faculty: "ABD", room: "CR204" }
      ],
    },
    {
      day: "Friday",
      subjects: [
        { time: "08:00-09:00", subject: "ENG(CL)", faculty: "PDR", room: "CR204" },
        { time: "09:00-10:00", subject: "ENG(CL)", faculty: "PDR", room: "CR204" },
        { time: "10:00-11:00", subject: "BEX(CL)", faculty: "ABD", room: "CR204" },
        { time: "11:00-12:00", subject: "RECESS" },
        { time: "12:00-01:00", subject: "EMT(TL)", faculty: "AAS", room: "CR204" },
        { time: "01:00-02:00", subject: "CMS(CL)", faculty: "RSP", room: "CR204" },
        { time: "02:00-03:00", subject: "FCS(CL)", faculty: "RSP", room: "CR204" },
        { time: "03:00-04:00", subject: "CMS(CL)", faculty: "RSP", room: "CR204" }
      ],
    },
    {
      day: "Saturday",
      subjects: [
        { time: "08:00-09:00", subject: "PRC(CL)", faculty: "KVB", room: "CR204" },
        { time: "09:00-10:00", subject: "PRC(CL)", faculty: "KVB", room: "CR204" },
        { time: "10:00-11:00", subject: "BEX(CL)", faculty: "ABD", room: "CR204" },
        { time: "11:00-12:00", subject: "RECESS" },
        { time: "12:00-01:00", subject: "EMT(TL)", faculty: "AAS", room: "CR204" },
        { time: "01:00-02:00", subject: "CMS(CL)", faculty: "RSP", room: "CR204" },
        { time: "02:00-03:00", subject: "BEX(CL)", faculty: "ABD", room: "CR207" },
        { time: "03:00-04:00", subject: "BEX(CL)", faculty: "ABD", room: "CR207" }
      ],
    }
  ],
  "III": [
    {
      day: "Monday",
      subjects: [
        { time: "08:00-09:00", subject: "T2-DTA(LL)", faculty: "ABD", room: "Lab 6" },
        { time: "09:00-10:00", subject: "T1-DBS(LL)", faculty: "PDR", room: "Lab 1" },
        { time: "10:00-11:00", subject: "T1-PRJ(LL)", faculty: "MRS", room: "Lab 2" },
        { time: "11:00-12:00", subject: "T2-SWE(LL)", faculty: "AVM", room: "Lab 6" },
        { time: "12:00-01:00", subject: "PRJ(CL)", faculty: "MRS", room: "CR204" },
        { time: "01:00-02:00", subject: "SLS", faculty: "KBK" },
        { time: "02:00-03:00", subject: "RECESS" },
        { time: "03:00-04:00", subject: "SWE(CL)", faculty: "AVM", room: "CR204" }
      ]
    },
    {
      day: "Tuesday",
      subjects: [
        { time: "08:00-09:00", subject: "T1-AVR(LL)", faculty: "SAN", room: "Lab 2" },
        { time: "09:00-10:00", subject: "T2-DBS(LL)", faculty: "PDR", room: "Lab 1" },
        { time: "10:00-11:00", subject: "RECESS" },
        { time: "11:00-12:00", subject: "PRJ(CL)", faculty: "MRS", room: "CR204" },
        { time: "12:00-01:00", subject: "T2-PRJ(LL)", faculty: "MRS", room: "Lab 2" },
        { time: "01:00-02:00", subject: "T1-DTA(LL)", faculty: "PDR", room: "Lab 6" },
        { time: "02:00-03:00", subject: "T2-AVR(LL)", faculty: "SAN", room: "Lab 2" },
        { time: "03:00-04:00", subject: "SWE(CL)", faculty: "AVM", room: "CR204" }
      ]
    },
    {
      day: "Wednesday",
      subjects: [
        { time: "08:00-09:00", subject: "T1-SWE(LL)", faculty: "AVM", room: "Lab 6" },
        { time: "09:00-10:00", subject: "T2-DST(LL)", faculty: "RSP", room: "Lab 2" },
        { time: "10:00-11:00", subject: "RECESS" },
        { time: "11:00-12:00", subject: "LIBRARY" },
        { time: "12:00-01:00", subject: "T1-AVR(LL)", faculty: "SAN", room: "Lab 2" },
        { time: "01:00-02:00", subject: "T2-PHP(LL)", faculty: "KVB", room: "Lab 6" },
        { time: "02:00-03:00", subject: "DST(CL)", faculty: "RSP", room: "CR204" },
        { time: "03:00-04:00", subject: "SWE(CL)", faculty: "AVM", room: "CR204" }
      ]
    },
    {
      day: "Thursday",
      subjects: [
        { time: "08:00-09:00", subject: "T2-AVR(LL)", faculty: "SAN", room: "Lab 2" },
        { time: "09:00-10:00", subject: "T1-PHP(LL)", faculty: "KVB", room: "Lab 6" },
        { time: "10:00-11:00", subject: "RECESS" },
        { time: "11:00-12:00", subject: "PHP(CL)", faculty: "KVB", room: "CR204" },
        { time: "12:00-01:00", subject: "DBMS(CL)", faculty: "PDR", room: "CR204" },
        { time: "01:00-02:00", subject: "DST(CL)", faculty: "RSP", room: "CR204" },
        { time: "02:00-03:00", subject: "SWE(CL)", faculty: "AVM", room: "CR204" },
        { time: "03:00-04:00", subject: "DBMS(CL)", faculty: "PDR", room: "CR207" }
      ]
    },
    {
      day: "Friday",
      subjects: [
        { time: "08:00-09:00", subject: "T1-PRJ(LL)", faculty: "MRS", room: "Lab 2" },
        { time: "09:00-10:00", subject: "T2-DTA(LL)", faculty: "ABD", room: "Lab 6" },
        { time: "10:00-11:00", subject: "RECESS" },
        { time: "11:00-12:00", subject: "PHP(CL)", faculty: "KVB", room: "CR204" },
        { time: "12:00-01:00", subject: "T2-PRJ(LL)", faculty: "MRS", room: "Lab 2" },
        { time: "01:00-02:00", subject: "T1-DTA(LL)", faculty: "PDR", room: "Lab 6" },
        { time: "02:00-03:00", subject: "DBMS(CL)", faculty: "PDR", room: "CR207" },
        { time: "03:00-04:00", subject: "SLS", faculty: "RSP", room: "" }
      ]
    },
    {
      day: "Saturday",
      subjects: [
        { time: "08:00-09:00", subject: "T1-DST(LL)", faculty: "RSP", room: "Lab 2" },
        { time: "09:00-10:00", subject: "RECESS" },
        { time: "10:00-11:00", subject: "RECESS" },
        { time: "11:00-12:00", subject: "DST(CL)", faculty: "RSP", room: "CR204" },
        { time: "12:00-01:00", subject: "DST(CL)", faculty: "RSP", room: "CR204" },
        { time: "01:00-02:00", subject: "SWE(CL)", faculty: "AVM", room: "CR204" },
        { time: "02:00-03:00", subject: "DBMS(CL)", faculty: "PDR", room: "CR204" },
        { time: "03:00-04:00", subject: "RECESS" }
      ]
    }
  ],
  "V": [
    {
      day: "Monday",
      subjects: [
        { time: "08:00-09:00", subject: "BCT(CL)", faculty: "AVM", room: "IE1 Lab" },
        { time: "09:00-10:00", subject: "BCT(CL)", faculty: "AVM", room: "IE1 Lab" },
        { time: "10:00-11:00", subject: "ISS(CL)", faculty: "SAN", room: "CR204" },
        { time: "11:00-12:00", subject: "ISS(CL)", faculty: "SAN", room: "CR204" },
        { time: "12:00-01:00", subject: "RECESS" },
        { time: "01:00-02:00", subject: "MIS(CL)", faculty: "NGK", room: "CR207" },
        { time: "02:00-03:00", subject: "T1-ISS(LL)", faculty: "SAN", room: "Lab 6" },
        { time: "03:00-04:00", subject: "T2-MIS(LL)", faculty: "NGK", room: "Lab 1" },
        { time: "04:00-05:00", subject: "EDSI(CL)", faculty: "CR204", room: "" }
      ]
    },
    {
      day: "Tuesday",
      subjects: [
        { time: "08:00-09:00", subject: "RECESS" },
        { time: "09:00-10:00", subject: "RECESS" },
        { time: "10:00-11:00", subject: "T1-ISS(LL)", faculty: "AVM", room: "Lab 6" },
        { time: "11:00-12:00", subject: "T2-EIT(LL)", faculty: "ABD", room: "Lab 1" },
        { time: "12:00-01:00", subject: "MIS(CL)", faculty: "NGK", room: "CR204" },
        { time: "01:00-02:00", subject: "T1-ISS(LL)", faculty: "SAN", room: "Lab 6" },
        { time: "02:00-03:00", subject: "T2-ISS(LL)", faculty: "SAN", room: "Lab 6" },
        { time: "03:00-04:00", subject: "EIT(CL)", faculty: "ABD", room: "CR204" },
        { time: "04:00-05:00", subject: "EIT(CL)", faculty: "ABD", room: "CR204" }
      ]
    },
    {
      day: "Wednesday",
      subjects: [
        { time: "08:00-09:00", subject: "DEV(CL)", faculty: "MRS", room: "CR204" },
        { time: "09:00-10:00", subject: "DEV(CL)", faculty: "MRS", room: "CR204" },
        { time: "10:00-11:00", subject: "DEV(CL)", faculty: "MRS", room: "CR204" },
        { time: "11:00-12:00", subject: "DEV(CL)", faculty: "MRS", room: "CR204" },
        { time: "12:00-01:00", subject: "RECESS" },
        { time: "01:00-02:00", subject: "RECESS" },
        { time: "02:00-03:00", subject: "RECESS" },
        { time: "03:00-04:00", subject: "PRO(LL)", faculty: "MRS/PDR", room: "Lab 2/Lab 6" },
        { time: "04:00-05:00", subject: "AIML(CL)", faculty: "SAN", room: "CR204" }
      ]
    },
    {
      day: "Thursday",
      subjects: [
        { time: "08:00-09:00", subject: "DEV(CL)", faculty: "MRS", room: "CR204" },
        { time: "09:00-10:00", subject: "DEV(CL)", faculty: "MRS", room: "CR204" },
        { time: "10:00-11:00", subject: "T1-MIS(LL)", faculty: "NGK/RSP", room: "Lab 6" },
        { time: "11:00-12:00", subject: "T2-DEV(LL)", faculty: "MRS", room: "Lab 2" },
        { time: "12:00-01:00", subject: "RECESS" },
        { time: "01:00-02:00", subject: "PRO(LL)", faculty: "MRS/PDR", room: "Lab 2/Lab 6" },
        { time: "02:00-03:00", subject: "ET1-AIML(LL)", faculty: "SAN", room: "Lab 6" },
        { time: "03:00-04:00", subject: "ET2-BCT(LL)", faculty: "AVM", room: "Lab 1" },
        { time: "04:00-05:00", subject: "AIML(CL)", faculty: "SAN", room: "CR204" }
      ]
    },
    {
      day: "Friday",
      subjects: [
        { time: "08:00-09:00", subject: "RECESS" },
        { time: "09:00-10:00", subject: "BCT(CL)", faculty: "AVM", room: "LAB 2" },
        { time: "10:00-11:00", subject: "T2-ISS(LL)", faculty: "AVM", room: "Lab 6" },
        { time: "11:00-12:00", subject: "T1-EIT(LL)", faculty: "ABD", room: "Lab 1" },
        { time: "12:00-01:00", subject: "RECESS" },
        { time: "01:00-02:00", subject: "PRO(LL)", faculty: "NGK/ABD", room: "Lab 2/Lab 6" },
        { time: "02:00-03:00", subject: "MIS(CL)", faculty: "NGK", room: "CR204" },
        { time: "03:00-04:00", subject: "MIS(CL)", faculty: "NGK", room: "CR204" },
        { time: "04:00-05:00", subject: "AIML(CL)", faculty: "SAN", room: "CR204" }
      ]
    },
    {
      day: "Saturday",
      subjects: [
        { time: "08:00-09:00", subject: "AIML(CL)", faculty: "SAN", room: "Lab 6" },
        { time: "09:00-10:00", subject: "BCT(CL)", faculty: "AVM", room: "Lab 2" },
        { time: "10:00-11:00", subject: "AIML(CL)", faculty: "SAN", room: "Lab 6" },
        { time: "11:00-12:00", subject: "EIT(CL)", faculty: "ABD", room: "CR206" },
        { time: "12:00-01:00", subject: "PRO(LL)", faculty: "NGK/ABD", room: "Lab 2/Lab 6" },
        { time: "01:00-02:00", subject: "PRO(LL)", faculty: "NGK/ABD", room: "Lab 2/Lab 6" },
        { time: "02:00-03:00", subject: "PRO(LL)", faculty: "NGK/ABD", room: "Lab 2/Lab 6" },
        { time: "03:00-04:00", subject: "MIS(CL)", faculty: "NGK", room: "CR204" },
        { time: "04:00-05:00", subject: "MIS(CL)", faculty: "NGK", room: "CR204" }
      ]
    }
  ]
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academic" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;