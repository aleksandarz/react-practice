const students = {
    "Aleksandar": 100,
    "Ignjat": 95,
    "Danilo": 85,
    "Lazar": 80,
    "Arsenije": 45,
}

const studentsWithPassingGrades = (students) => {
    return Object.entries(students).map(([name, grade]) => {
        return `${name}: ${grade > 50 ? "Passed" : "Didn't pass"}`;
    });
}

console.log(studentsWithPassingGrades(students));

const numbers = [2,3,4,5,6,7,8,9,10];

const squareOfNumbers = (numbers) => {
    return numbers.map((number) => number * number);
}

console.log(squareOfNumbers(numbers));