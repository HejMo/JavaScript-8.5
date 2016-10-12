var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');

var value = (a * a) + (2 * a * b) - (b * b);

console.log('a = '+ a)
console.log('b = '+ b)
console.log('Wynik działania a^2 + 2ab - b^2 = ' + value)

if (value > 0) {
	console.log('Wynik jest dodatni')
} else if (value < 0) {
	console.log('Wynik jest ujemny')
} else if (value == 0) {
	console.log('Wynik jest równy zero')
} else {
	console.log('Olałeś wpisanie zmiennych')
}
