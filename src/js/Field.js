export default class Field {
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