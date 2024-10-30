const cities = ['Лондон', 'Москва', 'Бразилиа', 'Лиссабон'];
let temp = [];
for (let i = 0; i < cities.length; i++) {
  let tempItem = prompt(`Введите температуру в городе ${cities[i]}`);
  temp.push(tempItem);
}
const body = document.querySelector('body');
const listContainer = document.createElement('ul');
body.append(listContainer);
for (let t = 0; t < temp.length; t++) {
  let tempItem = `Температура в городе ${cities[t]}: ${temp[t]}`
  let tempListItem = document.createElement('li');
  tempListItem.innerHTML = tempItem;
  listContainer.append(tempListItem)
}

temp.sort(function (a, b) {
    return a - b;
});
let min = `Минимальная температура: ${temp[0]}`;
let max = `Максимальная температура: ${temp[temp.length - 1]}`;
const minTemp = document.createElement('div');
minTemp.innerHTML = min;
body.append(minTemp);
const maxTemp = document.createElement('div');
maxTemp.innerHTML = max;
body.append(maxTemp);