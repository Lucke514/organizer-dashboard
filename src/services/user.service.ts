import { userLogin, userRegister } from "@interfaces/user.interface";
import routes from "./routes";
import cookies from "@/util/cookies";

//! Clase de servicio para el manejo de usuarios
class UserService {
    //* -> Funcionalidad para enviar el formulario de inicio de sesión
    async login(user : userLogin) {
        // -> Validar los campos antes de enviar la petición
        if (!user.email || !user.password) {
            return { error: 'Todos los campos son requeridos' }
        }

        // -> Enviar la petición al servidor
        const response = await fetch(routes.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        // -> Verificar si la petición fue exitosa
        if (response.ok) {
            return response.json()
        } else {
            return { error: 'Ocurrió un error al iniciar sesión' }
        }
    }

    //* -> Funcionalidad para enviar el formulario de registro
    async signup(user : userRegister) {
        // -> Validar que los campos no estén vacíos
        if (!user.email || !user.password || !user.id_rol) {
            return { error: 'Todos los campos son requeridos' }
        }

        // -> Enviar la petición al servidor
        const response = await fetch(routes.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        // -> Verificar si la petición fue exitosa
        if (response.ok) {
            return response.json()
        } else {
            return { error: 'Ocurrió un error al registrar el usuario' }
        }
    }

    //* -> Funcionalidad para verificar la sesión del usuario
    async checkSession() {
        // -> Obtener la cookie de sesión
        const token = cookies.getCookie('token')
        // -> Verificar si la cookie existe
        if (!token) {
            return { error: 'No se ha iniciado sesión' }
        }

        // -> Enviar la petición al servidor
        const response = await fetch(routes.checkSession, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });

        // -> Verificar si la petición fue exitosa
        if (response.ok) {
            return response.json()
        } else {
            return { error: 'No se ha iniciado sesión' }
        }
    }
}

const userServices = new UserService()
export default userServices