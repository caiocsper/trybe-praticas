const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const studentsInMath = object => {
  const lessons = Object.values(object);
  let totalStudents = 0;

  for (let lesson of lessons) {
    if (lesson.materia === 'Matemática') totalStudents += lesson.numeroEstudantes;
  }

  return totalStudents;
};

const createReport = (object, professor) => {
  const lessons = Object.values(object);
  const report = {
    professor: professor,
    aulas: [],
    estudantes: 0,
  };

  for (let lesson of lessons) {
    if (lesson.professor === professor) {
      report.aulas.push(lesson.materia);
      report.estudantes += lesson.numeroEstudantes;
    }
  }

  return report;
};


console.log(studentsInMath(allLessons));
console.log(createReport(allLessons, 'Maria Clara'));