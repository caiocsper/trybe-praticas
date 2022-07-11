const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (arra, arrb) => {
  return arra.map(( ele, i ) => {
    const average = arrb[i].reduce(( acc, cur ) => acc + cur) / arrb[i].length;

    return {
      name: ele,
      average,
    }
  });
}

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];