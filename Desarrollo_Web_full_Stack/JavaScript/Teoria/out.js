function calculateSubjectGrade(performance) {
    const weights = {
      assignments: 0.5,
      exams: 0.2,
      attendance: 0.3,
    };
  
    return (
      weights.assignments * performance.assignments +
      weights.exams * performance.exams +
      weights.attendance * performance.attendance
    );
  }
  
  function calculateSemesterGPA(semester) {
    let totalCredits = 0;
    let totalWeightedGrade = 0;
  
    semester.subjects.forEach((subject) => {
      const weightedGrade = calculateSubjectGrade(subject.performance);
      totalWeightedGrade += weightedGrade * subject.credits;
      totalCredits += subject.credits;
    });
  
    return (totalWeightedGrade / totalCredits) * 4;
  }
  
  function generateTranscript(student) {
    let cumulativeGPA = 0;
    let totalCredits = 0;
    const transcript = [];
  
    student.semesters.forEach((semester) => {
      const semesterGPA = calculateSemesterGPA(semester);
      const semesterCredits = semester.subjects.reduce(
        (acc, subject) => acc + subject.credits,
        0
      );
  
      cumulativeGPA =
        (cumulativeGPA * totalCredits + semesterGPA * semesterCredits) /
        (totalCredits + semesterCredits);
  
      totalCredits += semesterCredits;
  
      transcript.push({
        term: semester.term,
        gpa: semesterGPA.toFixed(2),
      });
    });
  
    const honors =
      cumulativeGPA >= 3.7
        ? "High Honors"
        : cumulativeGPA >= 3.3
        ? "Honors"
        : "";
  
    return {
      id: student.id,
      name: student.name,
      transcript,
      cumulativeGPA: cumulativeGPA.toFixed(2),
      honors,
    };
  }
  
  const jsonData = {
    students: [
      {
        id: "S001",
        name: "Alice",
        semesters: [
          {
            term: "Fall 2023",
            subjects: [
              {
                name: "Math",
                credits: 4,
                performance: { assignments: 80, exams: 70, attendance: 85 },
              },
              {
                name: "Physics",
                credits: 3,
                performance: { assignments: 90, exams: 60, attendance: 70 },
              },
            ],
          },
        ],
      },
      {
        id: "S002",
        name: "Bob",
        semesters: [
          {
            term: "Fall 2023",
            subjects: [
              {
                name: "Math",
                credits: 4,
                performance: { assignments: 85, exams: 75, attendance: 90 },
              },
              {
                name: "English",
                credits: 2,
                performance: { assignments: 95, exams: 82, attendance: 60 },
              },
            ],
          },
        ],
      },
    ],
  };
  
  const students = jsonData.students.map(generateTranscript);
  console.log(students);