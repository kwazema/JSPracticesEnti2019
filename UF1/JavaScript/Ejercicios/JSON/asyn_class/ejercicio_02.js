
const showCountryInfo = (name, capital, flagURL) => {
    const contentDiv = document.getElementById('added-flag');
    console.log(name, capital);

    // ***** RENDER NAME *****
    const nameElement = document.createElement('span');
    // <span />
    const nameText = document.createTextNode(name);
    // Italy
    nameElement.appendChild(nameText);
    //<span> Italy </span>
    //contentDiv.appendChild(nameElement);
    //<span> Italy </span> Se renderiza en la pagina Web.


    // ***** RENDER CAPITAL *****
    const capitalElement = document.createElement('span');
    const capitalText = document.createTextNode(capital);
    capitalElement.appendChild(capitalText);
    //contentDiv.appendChild(capitalElement);

    // ***** RENDER FLAG *****
    const imgElement = document.createElement('img');
    imgElement.src = flagURL;
    contentDiv.appendChild(imgElement);
    imgElement.width = 600;
    imgElement.height = 500;

    // ***** RENDER CONTENT COUNTRY *****    
    const countryElement = document.createElement('div');
    countryElement.classList.add('country');
    countryElement.appendChild(nameElement);
    countryElement.appendChild(capitalElement);
    countryElement.appendChild(imgElement);

    contentDiv.appendChild(countryElement);
}

onRequestSuccess = json => {
    console.log('Request', json);
    const contries = json;

    contries.forEach(contry => {
        showFilmInfo(contry.name, contry.capital, contry.flag);
    });



    //const containerImg = document.getElementById('added-flag');
    
    // json.forEach(item => { 
    //     console.log(item);
    //     console.log(item.name);
        
    //     //const imageURL = json[i].flag; //url de la imagen
    //     const imgURL = item.flag; //url de la imagen
    //     const imgNAME = item.name; //url de la imagen

    //     const imgElement = document.createElement('img');
    //     const nameElement = document.createElement('p');

    //     imgElement.src = imgURL; // coger flag de la respuesta
    //     nameElement.innerHTML = imgNAME;
                 
    //     containerImg.appendChild(imgElement);
    //     containerImg.appendChild(nameElement);
    // });
}

const banderaPais = () => {
    const inputValue = document.getElementById('input-value').value;
    console.log(inputValue);

    request (
        `https://restcountries.eu/rest/v2/name/${inputValue}`,
        onRequestSuccess
    );
}

  
