const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
button.onclick = function () {
  let taskText = input.value;
  let newTask = document.createElement('li');
  newTask.innerText = taskText;
  list.append(newTask);
  input.value = '';
};

list.addEventListener('click', function (evt) {
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('line-through');
  }
});
