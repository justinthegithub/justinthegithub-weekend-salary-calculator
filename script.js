//    ✕ Adds a single new employee's data to the table 
//Adds multiple new employees' data to the table
//Clears out the form inputs after a new employee is submitted 
//Updates the total monthly salary value when a single employee is added 
//Updates the total monthly salary value when multiple employees are added 
//Applies the 'over-budget' CSS class to the footer when the total monthly salary exceeds $20,000 
// Removes the correct employee table row when a delete button is clicked 


/**When the "Submit" button is clicked:

A new employee row should be added to the table.
The footer's total monthly cost should be updated.
The form inputs should be cleared out./ */

let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let idInput = document.getElementById("idInput");
let titleInput = document.getElementById("titleInput")
let annualSalaryInput = document.getElementById("annualSalaryInput");

let submit = document.getElementById("submit");

let table =document.getElementById(employeeTable)
table.innerHTML = 
  <td>${firstNameInput}/td>
<td>${lastNameInput}</td>
  <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>





