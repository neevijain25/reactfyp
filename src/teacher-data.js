// Teacher sample data structure
export const teacherData = {
  teacher: {
    name: "Dr. Swapna Naik",
    employeeId: "FAC001",
    designation: "Assistant Professor",
    department: "Information Technology",
    dateOfBirth: "15-06-1985",
    qualification: "Ph.D. in Computer Science",
    experience: "8 Years",
    specialization: "Data Structures, Algorithms, Machine Learning",
    email: "swapna.naik@svkm.ac.in",
    phone: "9876543210",
    address: "Vile Parle, Mumbai-400056",
    profileImage: null,
    joiningDate: "01-08-2017"
  },
  college: {
    name: "SHRI VILE PARLE KELAVANI MANDAL'S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & COLLEGE OF ENGINEERING",
    logo: "SVKM"
  },
  notifications: [
    {
      id: 1,
      title: "Faculty Meeting",
      message: "Department faculty meeting scheduled for tomorrow at 2 PM",
      date: "2025-09-26",
      read: false
    },
    {
      id: 2,
      title: "Exam Schedule",
      message: "Mid-term exam schedule has been released",
      date: "2025-09-25",
      read: true
    },
    {
      id: 3,
      title: "Workshop",
      message: "AI/ML workshop registration is now open",
      date: "2025-09-24",
      read: false
    },
    {
      id: 4,
      title: "Student Evaluation",
      message: "Submit student evaluation forms by end of week",
      date: "2025-09-23",
      read: true
    }
  ],
  classes: [
    {
      subject: "Data Structures",
      code: "DST",
      semester: "III",
      students: 42,
      room: "IT-103",
      schedule: "Mon, Wed, Fri - 10:00-11:00"
    },
    {
      subject: "Information Security Systems", 
      code: "ISS",
      semester: "V",
      students: 38,
      room: "IT-205",
      schedule: "Tue, Thu - 10:00-12:00"
    },
    {
      subject: "Machine Learning",
      code: "ML",
      semester: "V", 
      students: 35,
      room: "IT-Lab 2",
      schedule: "Mon, Thu - 2:00-4:00"
    }
  ],
  schedule: [
    {
      day: "Monday",
      classes: [
        { time: "09:00-10:00", subject: "Data Structures", semester: "III", room: "IT-103", type: "Theory" },
        { time: "10:00-11:00", subject: "Data Structures", semester: "III", room: "IT-103", type: "Theory" },
        { time: "11:00-12:00", subject: "Free Period", type: "Free" },
        { time: "12:00-01:00", subject: "Lunch Break", type: "Break" },
        { time: "01:00-02:00", subject: "Faculty Meeting", type: "Meeting" },
        { time: "02:00-03:00", subject: "Machine Learning Lab", semester: "V", room: "IT-Lab 2", type: "Lab" },
        { time: "03:00-04:00", subject: "Machine Learning Lab", semester: "V", room: "IT-Lab 2", type: "Lab" }
      ]
    },
    {
      day: "Tuesday", 
      classes: [
        { time: "09:00-10:00", subject: "Free Period", type: "Free" },
        { time: "10:00-11:00", subject: "Information Security", semester: "V", room: "IT-205", type: "Theory" },
        { time: "11:00-12:00", subject: "Information Security", semester: "V", room: "IT-205", type: "Theory" },
        { time: "12:00-01:00", subject: "Lunch Break", type: "Break" },
        { time: "01:00-02:00", subject: "Student Consultation", type: "Consultation" },
        { time: "02:00-03:00", subject: "Research Work", type: "Research" },
        { time: "03:00-04:00", subject: "Research Work", type: "Research" }
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "09:00-10:00", subject: "Data Structures", semester: "III", room: "IT-103", type: "Theory" },
        { time: "10:00-11:00", subject: "Data Structures", semester: "III", room: "IT-103", type: "Theory" },
        { time: "11:00-12:00", subject: "Paper Review", type: "Research" },
        { time: "12:00-01:00", subject: "Lunch Break", type: "Break" },
        { time: "01:00-02:00", subject: "Committee Work", type: "Administrative" },
        { time: "02:00-03:00", subject: "Student Projects", type: "Project Guide" },
        { time: "03:00-04:00", subject: "Student Projects", type: "Project Guide" }
      ]
    },
    {
      day: "Thursday",
      classes: [
        { time: "09:00-10:00", subject: "Preparation", type: "Preparation" },
        { time: "10:00-11:00", subject: "Information Security", semester: "V", room: "IT-205", type: "Theory" },
        { time: "11:00-12:00", subject: "Information Security", semester: "V", room: "IT-205", type: "Theory" },
        { time: "12:00-01:00", subject: "Lunch Break", type: "Break" },
        { time: "01:00-02:00", subject: "Machine Learning Lab", semester: "V", room: "IT-Lab 2", type: "Lab" },
        { time: "02:00-03:00", subject: "Machine Learning Lab", semester: "V", room: "IT-Lab 2", type: "Lab" },
        { time: "03:00-04:00", subject: "Free Period", type: "Free" }
      ]
    },
    {
      day: "Friday",
      classes: [
        { time: "09:00-10:00", subject: "Data Structures", semester: "III", room: "IT-103", type: "Theory" },
        { time: "10:00-11:00", subject: "Data Structures", semester: "III", room: "IT-103", type: "Theory" },
        { time: "11:00-12:00", subject: "Student Evaluation", type: "Evaluation" },
        { time: "12:00-01:00", subject: "Lunch Break", type: "Break" },
        { time: "01:00-02:00", subject: "Department Work", type: "Administrative" },
        { time: "02:00-03:00", subject: "Free Period", type: "Free" },
        { time: "03:00-04:00", subject: "Free Period", type: "Free" }
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "09:00-10:00", subject: "Workshop/Seminar", type: "Workshop" },
        { time: "10:00-11:00", subject: "Workshop/Seminar", type: "Workshop" },
        { time: "11:00-12:00", subject: "Research Work", type: "Research" },
        { time: "12:00-01:00", subject: "Free Period", type: "Free" }
      ]
    }
  ],
  students: [
    { name: "Neevi Jain", rollNo: "T037", semester: "V", subject: "ISS", attendance: 95 },
    { name: "Vanshika Yadav", rollNo: "T034", semester: "V", subject: "ISS", attendance: 88 },
    { name: "Rahul Sharma", rollNo: "T041", semester: "III", subject: "DST", attendance: 92 },
    { name: "Priya Patel", rollNo: "T028", semester: "III", subject: "DST", attendance: 97 },
    { name: "Amit Kumar", rollNo: "T015", semester: "V", subject: "ML", attendance: 89 }
  ]
};