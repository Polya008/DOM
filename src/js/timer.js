import definePosition from './definePosition';

export default function timerClock() {
  const body = document.querySelector('body');
  const timerField = document.createElement('div');
  timerField.className = 'timerField';
  body.append(timerField);
  const note = document.createElement('p');
  note.className = 'note';
  note.textContent = 'Goblin jumps in:';
  timerField.append(note);
  const timer = document.createElement('p');
  timer.className = 'timer';
  timerField.append(timer);
  body.append(timerField);
  timer.textContent = 3;
  setInterval(() => {
    if (+timer.textContent > 0) {
      timer.textContent -= 1;
    } else {
      definePosition();
      timer.textContent = 3;
    }
  }, 1000);
}
