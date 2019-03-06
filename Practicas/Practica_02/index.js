//----------- Init Variables -----------//
const form = document.getElementById('my-form');
const loginDiv = document.getElementById('login');
const logoutDiv = document.getElementById('logout');
const contentDiv = document.getElementById('added-film');
const drop = document.getElementById('drop');
drop.style.display='none';

const welcomeUser = () =>{
    const banner = document.getElementById('banner_user');
    var userName = localStorage.getItem('user', name);

    banner.innerHTML = `Welcome ${userName}!`;    
}

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

const onLogout = () => {
    logoutDiv.style.display='none';
    loginDiv.style.display='flex';
    localStorage.removeItem('user', name);
}

const onSubmit = () => {
    const formElements = form.elements;
    const name = formElements[0].value;

    localStorage.setItem('user', name);  
    checkUser();
};

//-----------------------------------------------------//

const showFilmInfo = (title, imgURL, desc, average) => {
    
    //----------- RENDER TITLE -----------//
    const titleElement = document.createElement('h2');
    const titleText = document.createTextNode(title);
    titleElement.appendChild(titleText);


    //------------ RENDER IMG ------------//
    const imgElement = document.createElement('img');

    if (imgURL === null)
        imgElement.src = "images/NotFound.png";
    else
        imgElement.src = `https://image.tmdb.org/t/p/original/${imgURL}`;

    imgElement.height = 250;
    imgElement.width = 175;


    //-------- RENDER DESCRIPTION --------//
    const descElement = document.createElement('p');
    const descText = document.createTextNode(desc);
    descElement.appendChild(descText);


    //-------------- AVERAGE -------------//
    const getAverage = [ 2, 4, 6, 8, 10 ];
    let numStarts = 0;
    let findAverage = false; 

    for (let i = 0; i < getAverage.length && !findAverage; i++) {
        if (average <= getAverage[i])
        {
            numStarts = i + 1;
            findAverage = true;
        }
    }


    //---------- RENDER START -----------//
    const startElement = new Array(numStarts);
    
    for (i = 0; i < numStarts; i++) {
        startElement[i] = document.createElement('img');

        startElement[i].src = "images/start.png";
    
        startElement[i].height = 50;
        startElement[i].width = 50;
    }


    //-------- RENDER CONTENT FILM -------//
    const infoElement = document.createElement('div');
    const startsElement = document.createElement('div');
    const filmElement = document.createElement('div');

    //------------------------------------//

    startsElement.classList.add('film_starts');
    filmElement.classList.add('film');
    
    //------------------------------------//

    infoElement.appendChild(titleElement);
    infoElement.appendChild(imgElement);
    infoElement.appendChild(descElement);
    
    startElement.forEach(element => {
        startsElement.appendChild(element);
    }); 

    //------------------------------------//

    filmElement.appendChild(infoElement);
    filmElement.appendChild(startsElement);

    contentDiv.appendChild(filmElement);
}
    
let lengthChildDiv;
const onRequestSuccess = (json) => {
    console.log('Request', json.results);
    const films = json.results;

    if (lengthChildDiv > 0) {        
        deleteChilds();
    }

    if (films !== null) {    
        films.forEach(film => {
            showFilmInfo(film.title, film.poster_path, film.overview, film.vote_average);
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

const filmInput = () => {
    const inputValue = document.getElementById('input-value').value;

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
