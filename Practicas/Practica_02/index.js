const form = document.getElementById('my-form');
const loginDiv = document.getElementById('login');
const logoutDiv = document.getElementById('logout');
let remove = false;
let filmElement;


// logoutDiv.style.display='none';

const checkUser = () => {
    if (localStorage.getItem('user')) {
        loginDiv.style.display='none';
        logoutDiv.style.display='block';
    }else{
        logoutDiv.style.display='none';
        loginDiv.style.display='block';
    }
}

checkUser();

const addLogin = () => {

}

const onLogout = () => {
    logoutDiv.style.display='none';
    loginDiv.style.display='block';
    localStorage.removeItem('user', name);
}

const onSubmit = () => {
    // const containerNone = document.createElement('div');


    // GET ELEMENTS
    const formElements = form.elements;
    const name = formElements[0].value;

    // HERE WE SHOULD CALL TO BACKEND TO REALLY DO THE LOGIN

    // STORE USER DATA ON LOCAL STORAGE
    localStorage.setItem('user', name);

    checkUser();
};


//-----------------------------------------------------//


//const showFilmInfo = (name, capital, flagURL) => {
const showFilmInfo = (title, imgURL, desc) => {
    
    let contentDiv = document.getElementById('added-film');

    if (remove)
    {
        
        contentDiv.removeChild(contentDiv.firstChild);
        contentDiv = document.getElementById('added-film');
    }

        // ***** RENDER NAME *****
    const titleElement = document.createElement('h2');
    const titleText = document.createTextNode(title);
    titleElement.appendChild(titleText);


        // ***** RENDER FLAG *****
    const imgElement = document.createElement('img');
    imgElement.src = `https://image.tmdb.org/t/p/original/${imgURL}`;
    contentDiv.appendChild(imgElement);
    imgElement.height = 300;
    imgElement.width = 200;

    // ***** RENDER CAPITAL *****
    const descElement = document.createElement('p');
    const descText = document.createTextNode(desc);
    descElement.appendChild(descText);


    // ***** RENDER CONTENT FILM *****    
    filmElement = document.createElement('div');

    filmElement.classList.add('film');
    filmElement.appendChild(titleElement);
    filmElement.appendChild(imgElement);
    filmElement.appendChild(descElement);

    contentDiv.appendChild(filmElement);
}

onRequestSuccess = json => {
    console.log('Request', json.results);
    const films = json.results;

    if (films != null)
    {
        films.forEach(film => {
            showFilmInfo(film.title, film.poster_path, film.overview);
        });
        
        remove = true;
    }
}

// Hacer un refresh
const filmInput = () => {
    const inputValue = document.getElementById('input-value').value;
    //console.log(inputValue);

    request (
        `https://api.themoviedb.org/3/search/movie?api_key=bc3dd0eb8086743c507d691477d25c1e&query=${inputValue}`,
        onRequestSuccess
    );
}

  
