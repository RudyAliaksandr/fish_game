function setRandomDirection(element, leftClass, rightClass, maxHeight) {
  const direction = Math.random() < 0.5 ? 'left' : 'right';
  element.classList.add(direction === 'left' ? leftClass : rightClass);

  const randomTop = Math.floor(Math.random() * (maxHeight - 80)); // высота картинки
  element.style.top = `${randomTop}px`;
}

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

  return interval;
}

function endGame() {
  alert("Игра окончена!");
  window.location.href = 'index.html';
}

function goToNextLevel() {
  window.location.href = "level_2.html";
}

window.onload = () => {
  const fish = document.getElementById('fish');
  const shark = document.getElementById('shark');
  const playArea = document.getElementById('play-area');
  const timerDisplay = document.getElementById('timer');
  const scoreDisplay = document.getElementById('score');
  const congratsBlock = document.getElementById('congrats');

  const maxHeight = playArea.clientHeight;
  let score = 0;

  setRandomDirection(fish, 'swim-left', 'swim-right', maxHeight);
  setRandomDirection(shark, 'swim-left', 'swim-right', maxHeight);

  const timer = startTimer(30, timerDisplay);

  fish.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Счёт: ${score}`;

    if (score >= 2) {
      clearInterval(timer);
      fish.style.display = 'none';
      shark.style.display = 'none';
      congratsBlock.classList.remove('hidden');
      return;
    }

    // спрятать рыбку и показать новую
    fish.style.display = 'none';
    fish.classList.remove('swim-left', 'swim-right');

    setTimeout(() => {
      const direction = Math.random() < 0.5 ? 'swim-left' : 'swim-right';
      fish.classList.remove('swim-left', 'swim-right');
      fish.classList.add(direction);

      const maxY = playArea.offsetHeight - fish.offsetHeight;
      const randomTop = Math.floor(Math.random() * maxY);
      fish.style.top = `${randomTop}px`;

      fish.style.display = 'block';
    }, 1000);
  });

  shark.addEventListener('click', () => {
    clearInterval(timer);
    alert('Ты поймал акулу! Игра окончена.');
    window.location.href = 'index.html';
  });
};
