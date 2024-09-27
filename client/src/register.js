// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

const $registerForm = document.getElementById("register-form")

const registerUsers = async (e) => {

    e.preventDefault()

    const $registerUsername = document.getElementById("username").value.trim()
    const $registerEmail = document.getElementById("email").value.trim()
    const $registerPassword = document.getElementById("password").value

    if (!$registerEmail || !$registerPassword || !$registerUsername) {
        return alert("Completa todos los campos")
    }
    try {
        const response = await fetch("http://localhost:4321/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({email:$registerEmail, password:$registerPassword, username:$registerUsername}),
        })
        console.log(response)
        if (!response.ok) {
            alert("Hubo un error al registrar un usuario")
            console.error("Error al registrar un usuario")
        }
        else{
            const data =  await response.json()
            alert(data.message)
            window.location.href = "/pages/login";
        }

    } catch (error) {
        console.error("ERROR AL REGISTRAR USUARIO", error)
    }
}

$registerForm.addEventListener("submit", registerUsers)




