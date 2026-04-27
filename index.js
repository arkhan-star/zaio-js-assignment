// Question 1

//A: 90–100
//B: 80–89
//C: 70–79
//D: 60–69
//F: below 60

function checkGrade() {
    const grade = Number(document.getElementById("grade").value);

    let letter;
    if (grade >= 90 && grade <= 100) {
        letter = "A";
    } else if (grade >= 80 && grade <= 89) {
        letter = "B";
    } else if (grade >= 70 && grade <= 79) {
        letter = "C";
    } else if (grade >= 60 && grade <= 69) {
        letter = "D";
    } else if (grade >= 0 && grade < 60) {
        letter = "F";
    } else {
        document.getElementById("result").textContent = "Please enter a grade between 0 and 100";
        return;
    }

    const result = grade >= 60 ? "Passed" : "Failed";
    document.getElementById("result").textContent = `${letter} - ${result}`;
}
