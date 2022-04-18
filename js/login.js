function loginFunc(e)
{

    var username = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {user: username, password: clave};
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

if(localStorage.getItem("user")!=null) {
  window.location.href="html/dashboard.html";
}


document.getElementById("ingresar").onclick = function () {


    var username = document.getElementById('usuario').value;
    var clave = document.getElementById('password').value;


    var urllogin = 'https://api-parcial.crangarita.repl.co/login';
    var data = {user: username, password: clave};
    
    fetch(urllogin, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }

      
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
                        console.log('Success:', response);
                        localStorage.setItem("user", response.user);
                        localStorage.setItem("name", response.name);
                        window.location.href="html/dashboard.html";
                      }
         );
}