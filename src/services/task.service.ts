import cookies from "@/util/cookies";
import routes from "./routes";

class TaskService {
    // * -> Obtener todas las tareas de un usuario
    async getMyTasks() {
        try {
            // -> Obtener el token de la sesión
            const token : string = cookies.getCookie('token');

            // -> Realizar la petición a la API
            const response = await fetch(routes.tasks, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            // -> Verificar si la petición fue exitosa
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error('Error al obtener las tareas');
            }
        } catch (error : unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Error al obtener las tareas');
            }
        }
    }

    // * -> Obtener una tarea por su ID
    async getTaskById(id: number) {
        try {
            // -> Obtener el token de la sesión
            const token : string = cookies.getCookie('token');

            // -> Realizar la petición a la API
            const response = await fetch(`${routes.tasks}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            // -> Verificar si la petición fue exitosa
            if (response.ok) {
                const data = await response.json();
                return data[0];
            } else {
                throw new Error('Error al obtener la tarea');
            }

        } catch (error : unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            } else {
                throw new Error('Error al obtener la tarea');
            }
        }
    }

}

const taskService = new TaskService();
export default taskService;