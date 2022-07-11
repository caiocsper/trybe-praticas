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

const addToObject = (object, key, value) => {
  object[key] = value;
}

const listObjectKeys = object => Object.keys(object).join(', ');

const countObjectKeys = object => Object.keys(object).length;

const listObjectValues = object => Object.values(object).join(', ');

const getTotalStudents = object => {
  const lessons = Object.values(object)
  let totalStudents = 0;

  for (let lesson of lessons) {
    totalStudents += lesson.numeroEstudantes;
  }

  return totalStudents;
};

const getValueByKeyPos = (object, pos) => Object.values(object)[pos];

const checkPairExists = (object, key, value) => object[key] === value ? true : false;

addToObject(lesson2, 'turno', 'noite');
console.log(listObjectKeys(lesson2));
console.log(countObjectKeys(lesson2));
console.log(listObjectValues(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(getTotalStudents(allLessons));
console.log(getValueByKeyPos(lesson1, 0));
console.log(checkPairExists(lesson3, 'turno', 'noite'));