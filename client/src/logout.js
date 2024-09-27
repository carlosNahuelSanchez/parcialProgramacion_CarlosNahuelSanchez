export const logout = async () => {
    try {
        const response = await fetch("http://localhost:4321/auth/sign-out", {
            method: "GET",
            credentials: "include",
        })
        console.log(response)
        if (!response.ok){
            return alert("Error al cerrar sesión")
        }
        alert("Sesión Cerrada correctamente")
        window.location.href = "/pages/login"
    } catch (error) {
        alert("ERROR AL CERRAR SESION")
        console.error("Error al cerrar sesion", error)
    }
    
}
