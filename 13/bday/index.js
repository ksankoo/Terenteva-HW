const bDay = document.querySelector('input');
const count = document.querySelector('button');
const today = new Date();
const todayStamp = today.getTime();

const body = document.querySelector('body');
let howLong = document.createElement('div');
body.append(howLong);

function dayTitle(number) {
  if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'дней';
  last_num = number % 10;
  if (last_num == 1) return 'день';
  if ([2, 3, 4].includes(last_num)) return 'дня';
  if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'дней';
}

function makeCount() {
  howLong.textContent = '';
  howLong.classList.remove('no-date');

  if (bDay.value === '') {
    howLong.textContent = 'Введите дату дня рождения';
    howLong.classList.add('no-date');
  } else {
    const bDayStamp = bDay.valueAsNumber;
    const difference = bDayStamp - todayStamp;
    const daysTillBDay = Math.ceil(difference / (1000 * 60 * 60 * 24));

    function dayTitle(number) {
      if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return 'дней';
      last_num = number % 10;
      if (last_num == 1) return 'день';
      if ([2, 3, 4].includes(last_num)) return 'дня';
      if ([5, 6, 7, 8, 9, 0].includes(last_num)) return 'дней';
    }

    const dayWord = dayTitle(daysTillBDay);

    howLong.textContent = `До дня рождения ${daysTillBDay} ${dayWord}`;
  }
}

count.addEventListener('click', makeCount);
