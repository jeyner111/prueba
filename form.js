const input_username= document.querySelector('#Username');

const expresiones = {
usuario: /^[a-zA-Z0-9]{1,30}$/, // Letras, numeros
}

const checkUsername = (e) =>{
switch(e.target.name){
    case "Username":
      return expresiones.usuario.test(e.target.value)
    break;
}
}

input_username.addEventListener('keyup',(e) =>{
  console.log(checkUsername(e))
 });