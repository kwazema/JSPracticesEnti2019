const title = document.getElementById('title');
//Es una variable obtienes todo el elemento (Nodo del DOM)

const changeText = () => {
  title.innerHTML = 'Well done!';
};

title.addEventListener('click', changeText);
//La funcion addEventListener se encarga de escucha el eventi click sobre el nodo title
//Click es el evento clicar con el raton