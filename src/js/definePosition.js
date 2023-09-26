export default function definePosition() {
  const goblined = document.querySelector('.goblined');
  let exId = 999;
  if (goblined) {
    exId = +goblined.getAttribute('id');
    goblined.classList.remove('goblined');
  }
  const cells = document.querySelectorAll('.cell');
  const cellsArr = [...cells];
  let id = 0;
  do id = Math.floor(Math.random() * (cellsArr.length));
  while (id === exId);
  const cell = document.getElementById(id);
  cell.classList.add('goblined');
}