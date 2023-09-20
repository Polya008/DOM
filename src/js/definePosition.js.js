export default function createCells(definition) {
  const field = document.createElement('div');
  for (let i = 0; i < definition * definition; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('id', i);
    field.append(cell);
  }
  field.className = 'field';
  return field;
}
