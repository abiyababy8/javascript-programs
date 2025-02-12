//33)	Write a JS program to evaluate student's performance by determining the grades of the subjects, calculating the overall percentage, and find the count of failed subjects
// eg: Subjects & Marks Array : [["Subject Name"], Marks];
// Output Expected :
//    subName Grade : A
//    subName Grade : B
//    subName Grade : c
//    Percentage of the total mark : %
//    Failed subjects: count of failed subjects

function evaluatePerformance(subjects) {
    let totalMarks = 0;
    let failedCount = 0;
    let totalSubjects = subjects.length;

    subjects.forEach(([subject, marks]) => {
        let grade;

        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else if (marks >= 60) grade = 'D';
        else {
            grade = 'F';
            failedCount++;
        }

        console.log(`${subject} Grade: ${grade}`);
        totalMarks += marks;
    });

    let percentage = (totalMarks / (totalSubjects * 100)) * 100;
    
    console.log(`Percentage of total marks: ${percentage.toFixed(2)}%`);
    console.log(`Failed subjects: ${failedCount}`);
}

// Example usage:
let subjectsMarks = [
    ["Math", 95],
    ["Science", 85],
    ["History", 72],
    ["English", 60],
    ["Physics", 45] // Failed subject
];

evaluatePerformance(subjectsMarks);