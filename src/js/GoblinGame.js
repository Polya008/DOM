export default class GoblinGame {
	element = null;

	constructor() {
		this.element = document.createElement('img');
		this.element.setAttribute('src', 'https://png.pngtree.com/png-clipart/20211022/ourmid/pngtree-goblin-goblin-elf-png-image_4004208.png');
		this.element.className = "goblin-img";
	}

	get getElement() {
		return this.element;
	}
}
