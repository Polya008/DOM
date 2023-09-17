import GoblinGame from '../app';

test('Testy test', () => {
  const test = new GoblinGame('goblin', 2);
  expect(test.fieldSize).toEqual(2);
});
