export default function setSize() {
  let size = 0;
  do { size = +prompt('Выберете величину стороны поля, от 2 до 4', 4); }

  while (size < 2 || size > 4 || Number.isInteger(size) === false || typeof size !== 'number');
  return size;
}