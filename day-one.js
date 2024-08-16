let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

// Getting the result paragraph element to show the results
let result = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');


if (numeroUn == stringUn) {
	console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    result.innerHTML = 'Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes';
} else {
	console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
    result.innerHTML = 'Las variables numeroUn y stringUn no tienen el mismo valor';
}

if (numeroTreinta === stringTreinta) {
	console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
    result2.innerHTML = 'Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo';
} else {
	console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
    result2.innerHTML = 'Las variables numeroTreinta y stringTreinta no tienen el mismo tipo';
}

if (numeroDiez == stringDiez) {
	console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    result3.innerHTML = 'Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes';
} else {
	console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
    result3.innerHTML = 'Las variables numeroDiez y stringDiez no tienen el mismo valor';
}
