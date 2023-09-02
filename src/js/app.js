import img from '../img/goblin.png';

import GoblinGame from './GoblinGame.js';
import Field from './Field.js';
import GameController from './GameController.js'


const goblin = new Goblin();
const field = new Field(document.querySelector('.field'));
field.createField();

const controller = new GameController(goblin, field);

controller.init()

setTimeout(controller.stop.bind(controller), 20000)