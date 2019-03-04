
//----------- Init Variables -----------//
const form = document.getElementById('my-form');
const loginDiv = document.getElementById('login');
const logoutDiv = document.getElementById('logout');
const contentDiv = document.getElementById('added-film');


const welcomeUser = () =>{
    var userName = localStorage.getItem('user', name);
    console.log(userName);
    const banner = document.getElementById('banner_user');
    banner.innerHTML = `Welcome ${userName}!`;    
}


const drop = document.getElementById('drop');
drop.style.display='none';

let lengthChildDiv;


const checkUser = () => {
    if (localStorage.getItem('user')) {
        loginDiv.style.display='none';
        logoutDiv.style.display='flex';
        
        welcomeUser();
    }else{
        logoutDiv.style.display='none';
        loginDiv.style.display='flex';
    }
}

checkUser();

// const addLogin = () => {

// }

const onLogout = () => {
    logoutDiv.style.display='none';
    loginDiv.style.display='flex';
    localStorage.removeItem('user', name);
}

const onSubmit = () => {
    // GET ELEMENTS
    const formElements = form.elements;
    const name = formElements[0].value;

    // STORE USER DATA ON LOCAL STORAGE
    localStorage.setItem('user', name);  
    //const name = localStorage.setItem('user', name);
    checkUser();
};


//-----------------------------------------------------//


//const showFilmInfo = (name, capital, flagURL) => {
const showFilmInfo = (title, imgURL, desc) => {
    
    //----------- RENDER TITLE -----------//
    const titleElement = document.createElement('h2');
    const titleText = document.createTextNode(title);
    titleElement.appendChild(titleText);


    //------------ RENDER IMG ------------//
    const imgElement = document.createElement('img');

    if (imgURL === null)
        imgElement.src = "NotFound.png";
    else
        imgElement.src = `https://image.tmdb.org/t/p/original/${imgURL}`;

    contentDiv.appendChild(imgElement);
    imgElement.height = 250;
    imgElement.width = 175;


    //-------- RENDER DESCRIPTION --------//
    const descElement = document.createElement('p');
    const descText = document.createTextNode(desc);
    descElement.appendChild(descText);


    //-------- RENDER CONTENT FILM -------//
    const filmElement = document.createElement('div');

    filmElement.classList.add('film');
    filmElement.appendChild(titleElement);
    filmElement.appendChild(imgElement);
    filmElement.appendChild(descElement);

    contentDiv.appendChild(filmElement);
}

onRequestSuccess = json => {
    console.log('Request', json.results);
    const films = json.results;

    if (lengthChildDiv > 0) {        
        deleteChilds();
    }

    if (films !== null) {    
        films.forEach(film => {
            showFilmInfo(film.title, film.poster_path, film.overview);
        });     
        
        lengthChildDiv = contentDiv.childNodes.length
        
        if (lengthChildDiv === 0)
            drop.style.display='none';
        else
            drop.style.display='flex';
        
    }else{
        deleteChilds();
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

const deleteChilds = () => {
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }
    drop.style.display='none';
}

  
