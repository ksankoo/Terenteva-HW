const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const randomWord =
  alphabet[Math.floor(Math.random() * 33)] +
  alphabet[Math.floor(Math.random() * 33)] +
  alphabet[Math.floor(Math.random() * 33)] +
  alphabet[Math.floor(Math.random() * 33)];
console.log(randomWord);
const wordConctainer = document.querySelector('.word-container');
const buttonWord = document.querySelector('button');
buttonWord.onclick = function () {
  wordConctainer.innerHTML = '';
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const randomWord =
    alphabet[Math.floor(Math.random() * 33)] +
    alphabet[Math.floor(Math.random() * 33)] +
    alphabet[Math.floor(Math.random() * 33)] +
    alphabet[Math.floor(Math.random() * 33)];
  const body = document.querySelector('body');
  wordConctainer.append(randomWord);
};
