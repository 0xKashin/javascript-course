let username;
let password;

document.getElementById('loginBtn').onclick = function () {
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  alert(`Username: ${username}\nPassword: ${password}` );
  
}
  
