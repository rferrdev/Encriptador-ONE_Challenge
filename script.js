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

const frase = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const fraseEncriptada = document.getElementById('msg');
const btnCopiar = document.getElementById('btn-copy');

/* function encryptRules(char) {
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
} */

/* function decryptRules(word) {
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
} */

const encryptRules = (char) => {
	const rules = {
		a: 'ai',
		e: 'enter',
		i: 'imes',
		o: 'ober',
		u: 'ufat',
	};
	return rules[char];
};

const decryptRules = (char) => {
	const rules = {
		ai: 'a',
		enter: 'e',
		imes: 'i',
		ober: 'o',
		ufat: 'u',
	};
	return rules[char];
};

function encrypt(msg) {
	const encryptedMsg = msg.replace(/a|e|i|o|u/g, encryptRules);
	return encryptedMsg;
}

function decrypt(msg) {
	const decryptedMsg = msg.replace(/ai|enter|imes|ober|ufat/g, decryptRules);
	return decryptedMsg;
}

function copyToClipboard() {
	fraseEncriptada.select();
	navigator.clipboard.writeText(fraseEncriptada.value);
}

function doXCrypt(msg) {
	const constraint = /[^a-zñ\s]/g;
	if (constraint.test(msg)) {
		alert('Sólo se permiten letras minúsculas sin acento');
		return false;
	}
	return true;
}

btnEncriptar.addEventListener('click', (event) => {
	event.preventDefault();
	const originalMsg = frase.value;
	const keepDo = doXCrypt(originalMsg);
	if (keepDo == true) {
		const finalMsg = encrypt(originalMsg);
		fraseEncriptada.style.color = '';
		fraseEncriptada.value = finalMsg;
		frase.value = '';
	} else {
		fraseEncriptada.style.color = 'red';
		fraseEncriptada.value = 'Corrige el mensaje de entrada';
	}
});

btnDesencriptar.addEventListener('click', (event) => {
	event.preventDefault();
	const originalMsg = frase.value;
	const keepDo = doXCrypt(originalMsg);
	if (keepDo == true) {
		const finalMsg = decrypt(originalMsg);
		fraseEncriptada.style.color = '';
		fraseEncriptada.value = finalMsg;
	} else {
		fraseEncriptada.style.color = 'red';
		fraseEncriptada.value = 'Corrige el mensaje de entrada';
	}
});

btnCopiar.addEventListener('click', (event) => {
	event.preventDefault();
	copyToClipboard();
});
