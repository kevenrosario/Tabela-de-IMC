const form = document.querySelector('#formulario');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC  é ${imc} ${nivelImc}`;

    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];

    } if (imc >= 34.9) {
        return nivel[4];

    } if (imc >= 29.9) {
        return nivel[3];

    } if (imc >= 24.9) {
        return nivel[2];

    } if (imc >= 18.5) {
        return nivel[1];

    } if (imc <= 18.5) {
        return nivel[0];
    }

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function createParagrafo() {
    const p = document.createElement('p');  //criando elementos no paragrafo
    return p;
}

function setResultado(msg, isValid) { // e gerar os resultados para essa div resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //toda vez que chamar a função resultado vamos chamar o HTML dele

    const p = createParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');

    } else {
        p.classList.add('bad');

    }

    p.innerHTML = msg;
    resultado.appendChild(p);


    // resultado.appendChild(p);//vai inserir um elemento nesse p no resultado   // vamos adicionar o paragrafo dentro da variavel resultado sendo que primeiro
    // ele vai zerar o resultado depois criar o paragrafo, e depois colocar o HTML dentro do paragrafo 

}


