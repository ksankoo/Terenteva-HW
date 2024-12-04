let add = document.querySelector(".add");
  let input = document.querySelector("input");
  let tasks = document.querySelector(".tasks");
  let noTask = document.querySelector(".no-task");
  let clear = document.querySelector(".clear");
  clear.disabled = true;
  add.onclick = function() {
    if (input.value) {
      let item = document.createElement('div');
      item.innerHTML = `<input type="checkbox" name="checkbox"> ${input.value}`;
      tasks.append(item);
      input.value = '';
      noTask.style.display = 'none';
      clear.disabled = false;
    } else {
      return
    }
  };

 clear.onclick = function() {
   tasks.innerHTML = '';
   clear.disabled = true;
   noTask.style.display = '';
 };