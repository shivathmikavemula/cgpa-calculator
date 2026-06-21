function generateInputs() {

    let count = document.getElementById("subjectCount").value;
    let div = document.getElementById("subjects");

    div.innerHTML = "";

    for(let i = 1; i <= count; i++) {

        div.innerHTML += `
        <h3>Subject ${i}</h3>

        Grade Point:
        <input type="number" id="grade${i}" min="0" max="10" placeholder="Enter Grade Point">

        Credit:
        <input type="number" id="credit${i}" min="1" placeholder="Enter Credits">

        <br><br>
        `;
    }
}

function calculateCGPA() {

    let count = document.getElementById("subjectCount").value;

    if(count === "" || count <= 0) {
        alert("Please enter the number of subjects");
        return;
    }

    let totalCredits = 0;
    let weightedSum = 0;

    for(let i = 1; i <= count; i++) {

        let grade = parseFloat(document.getElementById(`grade${i}`).value);
        let credit = parseFloat(document.getElementById(`credit${i}`).value);

        if(isNaN(grade) || isNaN(credit)) {
            alert("Please fill all fields");
            return;
        }

        weightedSum += grade * credit;
        totalCredits += credit;
    }

    let cgpa = weightedSum / totalCredits;

    document.getElementById("result").innerHTML =
        "Your CGPA: " + cgpa.toFixed(2);
}