// создаю массив, заполняю и вывожу на экран

const grades = [];
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(Math.random() * 101));
}
console.log(grades);

const gradesContainer = document.querySelector('.grades');
let newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append('Все оценки учеников: ' + grades);

// считаю среднее и вывожу на экран

let sum = 0;
grades.forEach(function (num) {
  sum += num;
});
const average = Math.round(sum / 12);
newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append('Средний балл: ' + average);

// сортирую и вывожу самую низкую и высокую оценки

grades.sort(function (a, b) {
  return a - b;
});
newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append('Оценки в порядке возрастания: ' + grades);
console.log(grades[0]);
console.log(grades[11]);

newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append('Самая низкая оценка: ' + grades[0]);

newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append('Самая высокая оценка: ' + grades[11]);

// считаю сколько студентов получили проходной балл

const filteredGrades = grades.filter((el) => el >= 60);
console.log(filteredGrades);
newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append(
  'Проходной балл получили ' + filteredGrades.length + ' студентов'
);

newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append(
  'Проходной балл не получили ' +
    (grades.length - filteredGrades.length) +
    ' студентов'
);

// преобразую баллы в буквы

const letterGrades = grades.map(function (item) {
  if (item >= 80) {
    return 'A';
  } else if (80 > item && item >= 60) {
    return 'B';
  } else if (60 > item && item >= 40) {
    return 'C';
  } else if (40 > item && item >= 20) {
    return 'D';
  } else if (20 > item) {
    return 'E';
  }
});
newDiv = document.createElement('div');
gradesContainer.append(newDiv);
newDiv.append('Оценки по американской системе: ' + letterGrades);
