let contador = 0;

const plusNumber = () => {
    contador++;

    const number = document.getElementById('number');
    number.innerHTML = contador;

    //number.innerHTML = Number(number.innerHTML) + 1;
};