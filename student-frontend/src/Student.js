import "./App.css";
import React, { useState } from "react";

const Student = () => {
  const [rollNo, setRollNo] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

 const hideIntro = () => {
   const intro = document.getElementsByClassName("intro-section")[0];
   if (intro) {
     intro.style.display = "none";
   }
  };
 const showIntro = () => {
   const intro = document.getElementsByClassName("intro-section")[0];
   if (intro) {
     intro.style.display = "block";
   }
  };
  const handleButtonClick1 = () => {
    hideIntro();
    getResult();
  };
  const handleButtonClick2 = () => {
    showIntro();
    hideLogin();
  };

  const getResult = () => {
    fetch(`http://localhost:3001/results/${rollNo}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No result found for the entered Roll No.");
        }
        return response.json();
      })
      .then((data) => {
        setResult(data);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setResult(null);
      });
  };

  const hideLogin = () => {
    setRollNo("");
    setResult(null);
    setError("");
  };

  return (
    <>
      <div className="section1">
        <h2>Enter Student Roll Number</h2>
        <input
          className="s1"
          type="text"
          id="student-rollNo"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          placeholder="Enter Roll No"
        />
        <button className="s1" onClick={handleButtonClick1}>
          Get Result
        </button>
        <button className="s1 cancel" onClick={handleButtonClick2}>
          Cancel
        </button>
      </div>
      <div className="intro-section">
        <div>
          <h1>Student Result Lookup</h1>
          <p>
            Welcome to the Student Result Lookup page! Here, you can quickly and
            easily access your academic results. Simply enter your roll number
            in the field below, and you'll be able to view your detailed
            performance in just a few clicks.
          </p>
          <ul>
            <li>
              <strong>Quick Access:</strong> Get instant access to your scores
              in various subjects.
            </li>
            <li>
              <strong>Accurate Information:</strong> Rest assured that the
              information displayed is accurate and up-to-date.
            </li>
            <li>
              <strong>User-Friendly:</strong> Designed to be straightforward and
              easy to use, so you can focus on what really matters—your
              education.
            </li>
          </ul>
          <p>
            If you encounter any issues or the results aren't available, you'll
            receive a clear message. Use the cancel button to clear the form and
            start over if needed.
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/41/f7/b9/41f7b947df92a22f22dc3f9fd914187e.gif"
            alt="Feature GIF"
            className="feature-gif"
          />
        </div>
      </div>

      <div className="section" id="student-login-form">
        <div id="student-result">
          {error && <p className="error">{error}</p>}
          {result && (
            <>
              <div className="R-header">
                <h2 style={{ textAlign: "center", color: "#ff6347" }}>
                  Student Result
                </h2>
              </div>
              <div className="R-section">
                <p>
                  <strong>Name:</strong> {result.name}
                </p>
                <p>
                  <strong>Gender:</strong> {result.gender}
                </p>
                <p>
                  <strong>Branch:</strong> {result.branchName}
                </p>
                <p>
                  <strong>Father's Name:</strong> {result.fathername}
                </p>
              </div>
              <div className="R-section">
                <h3>Subject Scores</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Math</td>
                      <td>{result.MATH}</td>
                    </tr>
                    <tr>
                      <td>Chemistry</td>
                      <td>{result.CHEMISTRY}</td>
                    </tr>
                    <tr>
                      <td>Physics</td>
                      <td>{result.PHYSICS}</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>{result.ENGLISH}</td>
                    </tr>
                    <tr>
                      <td>Computer</td>
                      <td>{result.ELECTRICAL}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="R-section total">
                <p>
                  <strong>Total Score:</strong> {result.TOTAL}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Student;
