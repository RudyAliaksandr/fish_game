function setRandomDirection(element, leftClass, rightClass) {
  const direction = Math.random() < 0.5 ? 'left' : 'right';
  element.classList.add(direction === 'left' ? leftClass : rightClass);
}

// Применяем к рыбке и акуле
window.onload = () => {
  const fish = document.getElementById('fish');
  const shark = document.getElementById('shark');

  setRandomDirection(fish, 'swim-left', 'swim-right');
  setRandomDirection(shark, 'swim-left', 'swim-right');
};
