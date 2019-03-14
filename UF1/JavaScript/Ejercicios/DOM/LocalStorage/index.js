const form = document.getElementById('my-form');
const loginDiv = document.getElementById('login');
const logoutDiv = document.getElementById('logout');

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
