let usuario = "mariakaterine@imail.com";
let contrasena = "1508755maria";

if (!usuario=="") {
    console.log("usuario vacío");
}else if ( contrasena.length < 8) {
    console.log("contraseña demaciasiado corta");
}else {
    console.log("Login exitoso");
}