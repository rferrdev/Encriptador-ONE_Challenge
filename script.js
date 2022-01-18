/* Reglas de encriptación:
"e" es convertido para "enter"
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
*/

/* Reglas de desencriptación:
"enter" es convertido para "e"
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras
*/

let frase = document.getElementById('input-texto');
let btnEncriptar = document.getElementById('btn-encriptar');
let btnDesencriptar = document.getElementById('btn-desencriptar');
let fraseEncriptada = document.getElementById('msg');
let btnCopiar = document.getElementById('btn-copy');

function encryptRules(char) {
	switch (char) {
		case 'a':
			char = 'ai';
			return char;
		case 'e':
			char = 'enter';
			return char;
		case 'i':
			char = 'imes';
			return char;
		case 'o':
			char = 'ober';
			return char;
		case 'u':
			char = 'ufat';
			return char;
	}
}

function decryptRules(word) {
	switch (word) {
		case 'ai':
			char = 'a';
			return char;
		case 'enter':
			char = 'e';
			return char;
		case 'imes':
			char = 'i';
			return char;
		case 'ober':
			char = 'o';
			return char;
		case 'ufat':
			char = 'u';
			return char;
	}
}

function encrypt() {
	let originalMsg = frase.value;
	let encryptedMsg = originalMsg.replace(/a|e|i|o|u/g, encryptRules);
	return encryptedMsg;
}

function decrypt() {
	let originalMsg = frase.value;
	let decryptedMsg = originalMsg.replace(
		/ai|enter|imes|ober|ufat/g,
		decryptRules
	);
	return decryptedMsg;
}

function copyToClipboard() {
	fraseEncriptada.select();
	navigator.clipboard.writeText(fraseEncriptada.value);
}

btnEncriptar.addEventListener('click', (event) => {
	event.preventDefault();
	let finalMsg = encrypt();
	fraseEncriptada.value = finalMsg;
	frase.value = '';
});

btnDesencriptar.addEventListener('click', (event) => {
	event.preventDefault();
	let finalMsg = decrypt();
	fraseEncriptada.value = finalMsg;
});

btnCopiar.addEventListener('click', (event) => {
	event.preventDefault();
	copyToClipboard();
});
