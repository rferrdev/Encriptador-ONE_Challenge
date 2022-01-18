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

btnEncriptar.addEventListener('click', (event) => {
	event.preventDefault();
	let finalMsg = encrypt();
	fraseEncriptada.value = finalMsg;
});

function encrypt() {
	let originalMsg = frase.value;
	let encryptedMsg = '';
	encryptedMsg = originalMsg.replace(/a|e|i|o|u/g, replacements);
	return encryptedMsg;
}

function replacements(char) {
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
	return 'perro';
}
