const form = document.getElementById("registrationForm");
const tableBody = document.getElementById("stundentList");

const registaredStudents = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let exsist = false;

    for(let i = 0 ; i < registaredStudents.length; i++) {
        const student = registaredStudents[i];
        if (student.name == name && student.email == email && student.password == password)
            exsist = true;
    }

    if (exsist) {
        alert("This student form is already exsists");
        return;
    }
    const newStudent = {
        id: registaredStudents.length + 1,
        name,
        email,
        password,
    }
    registaredStudents.push(newStudent);

    const row = document.createElement("tr");
    row.innerHTML = 
    <td>${newStudent.id}</td>
    <td>${newStudent.email}</td>
    <td>${newStudent.password}</td>
    
    tableBody.appendChild(row);
    form.reset();
})