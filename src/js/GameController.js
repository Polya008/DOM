export default class GameController {
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