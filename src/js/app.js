import img from '../img/goblin.png';

export default class GoblinGame {
	element = null;

	constructor() {
		this.element = document.createElement('img');
		this.element.setAttribute('src', 'https://png.pngtree.com/png-clipart/20211022/ourmid/pngtree-goblin-goblin-elf-png-image_4004208.png');
		this.element.className = "goblin-img";
	}

	get element() {
		return element;
	}
}

class Field {
	cells = [];
	size = 16;
	parentElement = null;
	parent = null;

	constructor(parent) {
		this.parent = parent;
	}

	createField() {
		let cells = '';
		for (let i = 0; i < this.size; i++) {
			cells += '<div class="cell"></div>';
		}
		this.parent.innerHTML = cells;
		this.cells = this.parent.children;
	}

	get size() {
		return this.size;
	}

	getCell(index) {
		return this.cells[index];
	}
}

class GameController {
	field = null;
	goblin = null;
	interval = null;
	lastIndex = 0;

	constructor(goblin, field) {
		this.goblin = goblin;
		this.field = field;
	}

	init() {
		this.interval = setInterval(() => {
			this.lastIndex = this.generateIndex(this.field.size, this.lastIndex);
			this.changeCell(this.lastIndex);
		}, 1000)
	}

	stop() {
		clearInterval(this.interval);
	}

	changeCell(index) {
		this.field.getCell(index).append(this.goblin.element)
	}

	generateIndex(length, lastOne) {
		const i = Math.floor(Math.random() * length);
		return i === lastOne ? this.generateIndex(length, lastOne) : i;
	}
}

const goblin = new Goblin();
const field = new Field(document.querySelector('.field'));
field.createField();

const controller = new GameController(goblin, field);

controller.init()

setTimeout(controller.stop.bind(controller), 20000)