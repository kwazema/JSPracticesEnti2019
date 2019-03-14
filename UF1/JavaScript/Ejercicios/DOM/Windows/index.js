// WINDOWS
console.log(window.innerHeight);
console.log(window.innerWidth);
// console.log(window.open('http://www.google.com'))

const redirectWeb = () => {
    const web = document.getElementById('web').value;
    console.log(web);
    window.open(`http://${web}`);
}

// SCREEN


// LOCATION


// HISTORY