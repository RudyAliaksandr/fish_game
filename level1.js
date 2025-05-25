function setRandomDirection(element, leftClass, rightClass, maxHeight) {
  const direction = Math.random() < 0.5 ? 'left' : 'right';
  element.classList.add(direction === 'left' ? leftClass : rightClass);

  // Установка случайной вертикальной позиции
  const randomTop = Math.floor(Math.random() * (maxHeight - 80)); // вычитаем высоту картинки
  element.style.top = `${randomTop}px`;
}

window.onload = () => {
  const fish = document.getElementById('fish');
  const shark = document.getElementById('shark');
  const playArea = document.getElementById('play-area');
  const maxHeight = playArea.clientHeight;

  setRandomDirection(fish, 'swim-left', 'swim-right', maxHeight);
  setRandomDirection(shark, 'swim-left', 'swim-right', maxHeight);
};

function startTimer(duration, display) {
  let time = duration;

  const interval = setInterval(() => {
    display.textContent = `Время: ${time}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      display.textContent = 'Время вышло!';
      endGame();
    }
  }, 1000);
}

function endGame() {
  alert("Игра окончена!");
  window.location.href = 'index.html'; // Возврат в главное меню
  // Здесь можно добавить переход на меню или перезапуск уровня
}

window.onload = () => {
  const fish = document.getElementById('fish');
  const shark = document.getElementById('shark');
  const playArea = document.getElementById('play-area');
  const maxHeight = playArea.clientHeight;
  const timerDisplay = document.getElementById('timer');

  setRandomDirection(fish, 'swim-left', 'swim-right', maxHeight);
  setRandomDirection(shark, 'swim-left', 'swim-right', maxHeight);

  startTimer(30, timerDisplay);
};

let score = 0;
const scoreDisplay = document.getElementById('score');

fish.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Счёт: ${score}`;

  if (score >= 2) {
    // Переход на следующий уровень
    window.location.href = 'level_2.html'; // Убедись, что такой файл существует
    return;
  }

  // Остановить анимацию и скрыть рыбку
  fish.style.display = 'none';
  fish.classList.remove('swim-left', 'swim-right');

  // Через 1 секунду — новая рыбка
  setTimeout(() => {
    const direction = Math.random() < 0.5 ? 'swim-left' : 'swim-right';
    fish.classList.remove('swim-left', 'swim-right');
    fish.classList.add(direction);

    const playArea = document.getElementById('play-area');
    const maxY = playArea.offsetHeight - fish.offsetHeight;
    const randomTop = Math.floor(Math.random() * maxY);
    fish.style.top = `${randomTop}px`;

    fish.style.display = 'block';
  }, 1000);
});

shark.addEventListener('click', () => {
  alert('Ты поймал акулу! Игра окончена.');
  window.location.href = 'index.html'; // Возврат в главное меню
});

