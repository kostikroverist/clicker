'use strict';

const getSel = sel => document.querySelector(sel);

function clicker(number) {
	return {
		increment() {
			return ++number;
		},
		decrement() {
			return --number;
		}
	}
}
let click = clicker(+getSel('.num').value);
console.log(getSel('.decrement'));
getSel('.decrement').addEventListener('click', () => getSel('.num').value = click.decrement())
getSel('.increment').addEventListener('click', () => getSel('.num').value = click.increment())
getSel('.num').addEventListener('change', (e) => click = clicker(e.target.value))