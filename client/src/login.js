import "./style.css";

// Obtener el formulario de inicio de sesión
const $loginForm = document.getElementById("login-form");

// Añadir un evento de submit al formulario
$loginForm.addEventListener("submit", async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData($loginForm);

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries());

  // Realizar una solicitud POST a la API de inicio de sesión
  const response = fetch("http://localhost:4321/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials:"include",
    body: JSON.stringify(entries),
  }).then((response) => {
    if (response.ok) {
      alert("Sesion Iniciada")
      window.location.href = "/pages/orders"
    } else {
      alert("Error al iniciar sesion")
    }
  });
});
