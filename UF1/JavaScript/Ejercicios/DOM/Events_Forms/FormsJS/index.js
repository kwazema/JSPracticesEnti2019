const form = document.getElementById('my-form');
const usersDiv = document.getElementById('added-users');

const addUser = (name, email) => {
  const containerNone = document.createElement('div');
  // Creamos un div y lo añadimos a la variable containerNone

  const nameNode = document.createTextNode(name);
  const emailNODE = document.createTextNode(email);
  // Creamos dos nodo de texto.

  // APPEND NAME AND EMAIL TO NEW NODE
  containerNone.appendChild(nameNode);
  containerNone.appendChild(emailNODE);

  // APPEND NEW NODE TO USERS DIV
  usersDiv.appendChild(containerNone);
};

const onSubmit = e => {
  const formElements = form.elements;
  const name = formElements[0].value;
  const email = formElements[2].value;

  addUser(name, email);
};
