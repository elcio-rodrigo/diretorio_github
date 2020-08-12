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
const addTurno = (obj, chave, valor) => obj[chave] = valor;
addTurno(lesson2, 'turno', 'manhã');
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson2));
const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson2));
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson2));
allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
const numeroEstudantes = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
        total += obj[array[i]].numeroEstudantes;
    }
    return total;
};
console.log(numeroEstudantes(allLessons));
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson3, 2));
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
        if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
}
console.log(verifyPair(lesson2, 'professor', 'Carlos'));
const estudantesMatematica = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for ( i in array) {
        if (obj[array[i]].materia === 'Matemática') {
            total += obj[array[i]].numeroEstudantes;
        }
    }
    return total;
}
console.log(estudantesMatematica(allLessons));
const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (i in array) {
      if (array[i].professor === name) {
        allLessons.push(array[i].materia)
        allStudent += array[i].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));