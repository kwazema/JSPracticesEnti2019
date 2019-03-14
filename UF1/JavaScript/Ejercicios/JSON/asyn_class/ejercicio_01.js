const pregunta = [];


// PASO 2
onRequestSuccess = json => {
  const containerNone = document.getElementById('added-math');

  pregunta.push (json.quiz.maths.q1.question);
  pregunta.push (json.quiz.maths.q2.question);

  console.log(pregunta[0]);
  console.log(pregunta[1]);

  const mathElement = document.createElement('div');

  //Me podrias explicar la diferencia entre createTextNode y el createElement
  //const math = document.createTextNode(pregunta[0]);
  //const math2 = document.createTextNode(pregunta[1]);
  
  //Uso de appendChild / podriamos añadir un div para las dos preguntas dentro.
  //Ademos puedo tener array de mathElement??? o solo tengo esta solucion??
  //Ademas como era para cargare todo el interior? (lo contrario de append child?)

  mathElement.innerHTML = `Resultado (JSON): ${pregunta[0]} ${pregunta[1]}`;
  //mathElement.push.innerHTML = pregunta[1];

  containerNone.appendChild(mathElement);
  //containerNone.appendChild(mathElement[1]);

  /********************************************************************/

  // Introducir los elementos eliminando el interior del DIV
  //document.getElementById('added-math').innerHTML = `<div>${pregunta[0]} <br> ${pregunta[1]} </div>`;

  // console.log(json.quiz.maths.q1.question);
  // console.log(json.quiz.maths.q2.question);
}

// PASO 1
request(
  'https://support.oneskyapp.com/hc/en-us/article_attachments/202761727/example_2.json',
  onRequestSuccess
);

