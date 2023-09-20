import createCells from './cells';
import setSize from './setSize';
import definePosition from './definePosition';
import timerClock from './timer';

const size = setSize();
const field = createCells(size);
const body = document.querySelector('body');
body.append(field);
field.style.setProperty('--side', size);
definePosition();
timerClock();
