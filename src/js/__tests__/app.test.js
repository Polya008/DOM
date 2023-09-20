/**
 * @jest-environment jsdom
 */
import definePosition from '../definePosition';
import createCells from '../cells';

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false,
    };
  },
});

test('whether function define new position of goblin', () => {
  const field = createCells(2);
  const body = document.querySelector('body');
  body.append(field);
  definePosition();
  const goblined = document.querySelector('.goblined');
  const id = goblined.setAttribute('id');
  expect(id).toBeWithinRange(0, 3);
});