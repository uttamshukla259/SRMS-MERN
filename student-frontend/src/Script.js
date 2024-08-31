// import React from "react";
// const adminPassword = "8757300503";

// const Script = () => {
//   return (
//     <div>

//   const showStudentLogin = () => setView("student-login");
//   const showAdminLogin = () => setView("admin-login");
//   const hideLogin = () => setView("");

//   const showAddStudentForm = () => setView("add-student");
//   const showAddResultForm = () => setView("add-result");

//   const hideForm = () => setView("");

//   const hideAdminPanel = () => setView("");

//   const getResult = async () => {
//     const rollNo = document.getElementById("student-rollNo").value;

//     try {
//       const response = await fetch(`http://localhost:3001/results/${rollNo}`);
//       if (!response.ok) {
//         throw new Error("No result found for the entered Roll No.");
//       }
//       const data = await response.json();
//       setResult(data);
//       setError("");
//     } catch (error) {
//       setResult(null);
//       setError(error.message);
//     }
//   };





// function showStudentLogin() {
//   document.getElementById("student-login-form").style.display = "block";
//   document.getElementById("admin-login-form").style.display = "none";
// }

// function showAdminLogin() {
//   document.getElementById("student-login-form").style.display = "none";
//   document.getElementById("admin-login-form").style.display = "block";
// }

// function hideLogin() {
//   document.getElementById("student-login-form").style.display = "none";
//   document.getElementById("admin-login-form").style.display = "none";
// }

// function showAddStudentForm() {
//   document.getElementById("add-student-form").style.display = "block";
//   document.getElementById("add-result-form").style.display = "none";
// }

// function showAddResultForm() {
//   document.getElementById("add-student-form").style.display = "none";
//   document.getElementById("add-result-form").style.display = "block";
// }

// function hideForm(formId) {
//   document.getElementById(formId).style.display = "none";
// }

// function hideAdminPanel() {
//   document.getElementById("admin-panel").style.display = "none";
// }

// function getResult() {
//   const rollNo = document.getElementById("student-rollNo").value;

//   fetch(`http://localhost:3001/results/${rollNo}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("No result found for the entered Roll No.");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const resultDiv = document.getElementById("student-result");
//       resultDiv.innerHTML = `
//        <div class="R-header">
//                 <h2>Student Result</h2>
//             </div>
//             <div class="R-section">
//                 <h3>Student Information</h3>
//                 <p><strong>Name:</strong> ${data.name}</p>
//                 <p><strong>Gender:</strong> ${data.gender}</p>
//                 <p><strong>Branch:</strong> ${data.branchName}</p>
//                 <p><strong>Father's Name:</strong> ${data.fathername}</p>
//             </div>
//             <div class="R-section">
//                 <h3>Subject Scores</h3>
//                 <table>
//                     <tr>
//                         <th>Subject</th>
//                         <th>Score</th>
//                     </tr>
//                     <tr>
//                         <td>Math</td>
//                         <td>${data.MATH}</td>
//                     </tr>
//                     <tr>
//                         <td>Chemistry</td>
//                         <td>${data.CHEMISTRY}</td>
//                     </tr>
//                     <tr>
//                         <td>Physics</td>
//                         <td>${data.PHYSICS}</td>
//                     </tr>
//                     <tr>
//                         <td>English</td>
//                         <td>${data.ENGLISH}</td>
//                     </tr>
//                     <tr>
//                         <td>Electrical</td>
//                         <td>${data.ELECTRICAL}</td>
//                     </tr>
//                 </table>
//             </div>
//             <div class="R-section total">
//                 <p><strong>Total Score:</strong> ${data.TOTAL}</p>
//             </div>
//       `;
//     })
//     .catch((error) => {
//       const resultDiv = document.getElementById("student-result");
//       resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
//     });
// }







//         </div>
//     )
// }

// export default Script;