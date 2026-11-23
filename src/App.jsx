
import { useState } from 'react';
import StudentCard from './components/StudentCard';
import './App.css';

function App() {

  // Task 3: useState Hook
  const [showStudents, setShowStudents] = useState(true);

  // Task 2: Student records array
  const students = [
    {
      id: 1,
      name: "Rahul",
      rollNumber: "101",
      department: "CSE",
      cgpa: 9.2
    },
    {
      id: 2,
      name: "Priya",
      rollNumber: "102",
      department: "ECE",
      cgpa: 8.8
    },
    {
      id: 3,
      name: "Amit",
      rollNumber: "103",
      department: "IT",
      cgpa: 9.0
    },
    {
      id: 4,
      name: "Sneha",
      rollNumber: "104",
      department: "CSE",
      cgpa: 9.5
    }
  ];

  return (
    <div>
      <h1>Student Management System</h1>

      {/* Task 3: Show/Hide Button */}
      <button
        onClick={() => setShowStudents(!showStudents)}
      >
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {/* Task 1 and Task 2 */}
      {showStudents && (
        <div className="student-container">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              rollNumber={student.rollNumber}
              department={student.department}
              cgpa={student.cgpa}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;
