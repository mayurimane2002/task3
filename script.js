let students = [];
function addStudent() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let course = document.getElementById("course").value;
  students.push({ name: name, email: email, course: course });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").value = "";

  let table = document.getElementById("studentsTable");
  let row = table.insertRow(-1);
  let nameCell = row.insertCell(0);
  let emailCell = row.insertCell(1);
  let courseCell = row.insertCell(2);
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
  courseCell.innerHTML = course;
}
