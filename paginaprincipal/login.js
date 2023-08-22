function login() 
{
    let nombre = document.getElementById('nombre').value;
    let contra = document.getElementById('contra').value;

    if (nombre=="user" && contra=="123456")
    {
        location.href = "index.html";

    }
    else{
        alert("Usuario o contraseña incorrecta")
    }
}

function crear()
{
    alert("FELICIDADES, SU USUARIO HA SIDO CREADO CON EXITO");
}