import React, { useState } from "react";
import "./App.css";

const adminPassword = "8757300503";

const Admin = () => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);

  const authenticateAdmin = () => {
    const password = document.getElementById("admin-password").value;
    if (password === adminPassword) {
      setAdminLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  const getAllStudents = () => {
    fetch(`http://localhost:3001/students`)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setCurrentSection("getAllStudents");
      });
  };

  const addStudent = () => {
    const name = document.getElementById("studentName").value;
    const rollNo = document.getElementById("studentRollNo").value;
    const gender = document.getElementById("studentGender").value;
    const fathername = document.getElementById("studentFatherName").value;
    const courseName = document.getElementById("studentCourseName").value;
    const branchName = document.getElementById("studentBranchName").value;

    fetch(`http://localhost:3001/students/add-student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        rollNo,
        gender,
        fathername,
        courseName,
        branchName,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setCurrentSection(null);
      });
  };

  const updateStudent = () => {
    const rollNo = document.getElementById("updateStudentRollNo").value;
    const name = document.getElementById("updateStudentName").value;
    const gender = document.getElementById("updateStudentGender").value;
    const fathername = document.getElementById("updateStudentFatherName").value;
    const courseName = document.getElementById("updateStudentCourseName").value;
    const branchName = document.getElementById("updateStudentBranchName").value;

    fetch(`http://localhost:3001/students/update-student/${rollNo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        gender,
        fathername,
        courseName,
        branchName,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setCurrentSection(null);
      });
  };

  const deleteStudent = () => {
    const rollNo = document.getElementById("deleteStudentRollNo").value;

    fetch(`http://localhost:3001/students/delete-student/${rollNo}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setCurrentSection(null);
      });
  };

  const getAllResults = () => {
    fetch(`http://localhost:3001/results`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setCurrentSection("getAllResults");
      });
  };

  const addResult = () => {
    const rollNo = document.getElementById("resultRollNo").value;
    const MATH = document.getElementById("resultMath").value;
    const CHEMISTRY = document.getElementById("resultChemistry").value;
    const PHYSICS = document.getElementById("resultPhysics").value;
    const ENGLISH = document.getElementById("resultEnglish").value;
    const ELECTRICAL = document.getElementById("resultElectrical").value;
    const TOTAL = document.getElementById("resultTotal").value;

    fetch(`http://localhost:3001/results/add-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rollNo,
        MATH,
        CHEMISTRY,
        PHYSICS,
        ENGLISH,
        ELECTRICAL,
        TOTAL,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setCurrentSection(null);
      });
  };

  const updateResult = () => {
    const rollNo = document.getElementById("updateResultRollNo").value;
    const MATH = document.getElementById("updateResultMath").value;
    const CHEMISTRY = document.getElementById("updateResultChemistry").value;
    const PHYSICS = document.getElementById("updateResultPhysics").value;
    const ENGLISH = document.getElementById("updateResultEnglish").value;
    const ELECTRICAL = document.getElementById("updateResultElectrical").value;
    const TOTAL = document.getElementById("updateResultTotal").value;

    fetch(`http://localhost:3001/results/update-result/${rollNo}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MATH,
        CHEMISTRY,
        PHYSICS,
        ENGLISH,
        ELECTRICAL,
        TOTAL,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setCurrentSection(null);
      });
  };

  const deleteResult = () => {
    const rollNo = document.getElementById("deleteResultRollNo").value;

    fetch(`http://localhost:3001/results/delete-result/${rollNo}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        setCurrentSection(null);
      });
  };

  return (
    <div>
      {!adminLoggedIn ? (
        <div className="section1">
          <h2>Enter Password</h2>
          <input
            className="s1"
            type="password"
            id="admin-password"
            placeholder="Enter Admin Password"
          />
          <button className="s1" onClick={authenticateAdmin}>
            Login
          </button>
          <button className="s1" onClick={() => setCurrentSection(null)}>
            Cancel
          </button>
        </div>
      ) : (
        <div id="admin-area" className="admin-area">
          <div className="crud-section">
            <button className="crud" onClick={getAllStudents}>
              Get All Students
            </button>

            <button
              className="crud"
              onClick={() => setCurrentSection("addStudent")}
            >
              Add Student
            </button>
            <button
              className="crud"
              onClick={() => setCurrentSection("updateStudent")}
            >
              Update Student
            </button>
            <button
              className="crud"
              onClick={() => setCurrentSection("deleteStudent")}
            >
              Delete Student
            </button>
            <button className="crud" onClick={getAllResults}>
              Get All Results
            </button>
            <button
              className="crud"
              onClick={() => setCurrentSection("addResult")}
            >
              Add Result
            </button>
            <button
              className="crud"
              onClick={() => setCurrentSection("updateResult")}
            >
              Update Result
            </button>
            <button
              className="crud"
              onClick={() => setCurrentSection("deleteResult")}
            >
              Delete Result
            </button>
          </div>
        </div>
      )}

      {currentSection === "getAllStudents" && (
        <div id="getAllStudentsForm" className="form-container">
          <h3>All Students</h3>
          <div className="s-result">
            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Father's Name</th>
                  <th>Course Name</th>
                  <th>Branch Name</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.rollNo}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.fathername}</td>
                    <td>{student.courseName}</td>
                    <td>{student.branchName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "getAllResults" && (
        <div id="getAllResultsForm" className="form-container">
          <h3>All Results</h3>

          <div className="s-result">
            <table>
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>MATH</th>
                  <th>CHEMISTRY</th>
                  <th>PHYSICS</th>
                  <th>ENGLISH</th>
                  <th>ELECTRICAL</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.rollNo}>
                    <td>{result.rollNo}</td>
                    <td>{result.MATH}</td>
                    <td>{result.CHEMISTRY}</td>
                    <td>{result.PHYSICS}</td>
                    <td>{result.ENGLISH}</td>
                    <td>{result.ELECTRICAL}</td>
                    <td>{result.TOTAL}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "addStudent" && (
        <div id="addStudentForm" className="form-container">
          <h3>Add Student</h3>
          <input id="studentName" placeholder="Name" />
          <input id="studentRollNo" placeholder="Roll No" />
          <input id="studentGender" placeholder="Gender" />
          <input id="studentFatherName" placeholder="Father's Name" />
          <input id="studentCourseName" placeholder="Course Name" />
          <input id="studentBranchName" placeholder="Branch Name" />
          <button onClick={addStudent}>Add Student</button>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "updateStudent" && (
        <div id="updateStudentForm" className="form-container">
          <h3>Update Student</h3>
          <input id="updateStudentRollNo" placeholder="Roll No" />
          <input id="updateStudentName" placeholder="Name" />
          <input id="updateStudentGender" placeholder="Gender" />
          <input id="updateStudentFatherName" placeholder="Father's Name" />
          <input id="updateStudentCourseName" placeholder="Course Name" />
          <input id="updateStudentBranchName" placeholder="Branch Name" />
          <button onClick={updateStudent}>Update Student</button>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "deleteStudent" && (
        <div id="deleteStudentForm" className="form-container">
          <h3>Delete Student</h3>
          <input id="deleteStudentRollNo" placeholder="Roll No" />
          <button onClick={deleteStudent}>Delete Student</button>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "addResult" && (
        <div id="addResultForm" className="form-container">
          <h3>Add Result</h3>
          <input id="resultRollNo" placeholder="Roll No" />
          <input id="resultMath" placeholder="MATH" />
          <input id="resultChemistry" placeholder="CHEMISTRY" />
          <input id="resultPhysics" placeholder="PHYSICS" />
          <input id="resultEnglish" placeholder="ENGLISH" />
          <input id="resultElectrical" placeholder="COMPUTER" />
          <input id="resultTotal" placeholder="TOTAL" />
          <button onClick={addResult}>Add Result</button>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "updateResult" && (
        <div id="updateResultForm" className="form-container">
          <h3>Update Result</h3>
          <input id="updateResultRollNo" placeholder="Roll No" />
          <input id="updateResultMath" placeholder="MATH" />
          <input id="updateResultChemistry" placeholder="CHEMISTRY" />
          <input id="updateResultPhysics" placeholder="PHYSICS" />
          <input id="updateResultEnglish" placeholder="ENGLISH" />
          <input id="updateResultElectrical" placeholder="ELECTRICAL" />
          <input id="updateResultTotal" placeholder="TOTAL" />
          <button onClick={updateResult}>Update Result</button>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      {currentSection === "deleteResult" && (
        <div id="deleteResultForm" className="form-container">
          <h3>Delete Result</h3>
          <input id="deleteResultRollNo" placeholder="Roll No" />
          <button onClick={deleteResult}>Delete Result</button>
          <button onClick={() => setCurrentSection(null)}>Back</button>
        </div>
      )}

      <div className="intro-section">
        <div>
          <h1>Admin Dashboard</h1>
          <p>
            Welcome to the Admin Dashboard! This is your central hub for
            managing student data and results efficiently. Here, you can perform
            a variety of administrative tasks with ease.
          </p>
          <ul>
            <li>
              <strong>Manage Students:</strong> Quickly view, add, update, or
              delete student records to keep the database current and accurate.
            </li>
            <li>
              <strong>Handle Results:</strong> Access and manage student results
              effortlessly, ensuring all academic performance data is
              up-to-date.
            </li>
            <li>
              <strong>Intuitive Interface:</strong> Navigate through the
              dashboard with ease, thanks to a user-friendly design tailored for
              efficient administration.
            </li>
          </ul>
          <p>
            Should you encounter any issues or need assistance, help is just a
            click away. Use the navigation buttons to switch between different
            administrative tasks smoothly.
          </p>
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/1138853/screenshots/4834993/06_08_gif.gif"
            alt="Feature GIF"
            className="feature-gif"
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
