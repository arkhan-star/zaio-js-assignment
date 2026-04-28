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

// Question 2
// Convert a string into a number
function typeConversion() {
    const input = document.getElementById("input").value;
    const convertedNumber = Number(input);

    console.log(`"${input}" as a number is:`, convertedNumber);
    console.log(`Type of converted value:`, typeof convertedNumber);

    // Test truthy and falsy values
    const values = [0, "", "hello", null, undefined, NaN];
    const results = [];

    for (const value of values) {
        let displayValue;
        if (value === "") {
            displayValue = '"" (empty string)';
        } else if (Number.isNaN(value)) {
            displayValue = "NaN";
        } else {
            displayValue = String(value);
        }

        if (value) {
            console.log(`${displayValue} (${typeof value}) is truthy`);
            results.push(`${displayValue} is truthy`);
        } else {
            console.log(`${displayValue} (${typeof value}) is falsy`);
            results.push(`${displayValue} is falsy`);
        }
    }

    document.getElementById("conversionResult").textContent =
        `"${input}" as a number is ${convertedNumber} (${typeof convertedNumber}). ` +
        results.join("; ");
}

// Question 3 - Functions and Logical Operators

function greetingBot(name, isMorning) {
    if (isMorning) {
        return `Good morning, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}