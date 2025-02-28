class Student {
    #grades; // Private field

    constructor(name, grades) {
        this.name = name;
        this.#grades = grades; // Cannot be accessed directly outside the class
    }

    // Public method to add a grade
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.#grades.push(grade);
            console.log(`${this.name} received a new grade: ${grade}`);
        } else {
            console.log("Grade must be between 0 and 100.");
        }
    }

    // Public method to get average grade
    getAverageGrade() {
        const sum = this.#grades.reduce((a, b) => a + b, 0);
        return (sum / this.#grades.length).toFixed(2);
    }
}

// Creating a student record
const student = new Student("John", [85, 90, 78]);
student.addGrade(95); 
console.log(student.getAverageGrade()); 
