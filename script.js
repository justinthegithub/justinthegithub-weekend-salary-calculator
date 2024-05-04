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

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();

    let firstNameInput = document.getElementById("firstNameInput").value;
    let lastNameInput = document.getElementById("lastNameInput").value;
    let idInput = document.getElementById("idInput").value;
    let titleInput = document.getElementById("titleInput").value;
    let annualSalaryInput = document.getElementById("annualSalaryInput").value;

    let table = document.getElementById("employeeTable");
    table.innerHTML += `<tr><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${annualSalaryInput}</td></tr>`;


    document.getElementById("firstNameInput").value = '';
    document.getElementById("lastNameInput").value = '';
    document.getElementById("idInput").value = '';
    document.getElementById("titleInput").value = '';
    document.getElementById("annualSalaryInput").value = '';

    calculateTotal(annualSalaryInput)


  });
});

function calculateTotal(salary) {
  console.log("calculateTotal() works!");
let total
total+=salary 
let footer =document.getElementById("footerTotal")
footer.textContent = `Total Monthly: $${total}`;
}





