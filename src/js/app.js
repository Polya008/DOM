
import Field from './Field.js';
import GameController from './GameController.js';
import Goblin from './GoblinGame.js';


const goblin = new Goblin();
const field = new Field();
field.createField();

const controller = new GameController(goblin, field);

controller.init()

setTimeout(controller.stop.bind(controller), 20000)