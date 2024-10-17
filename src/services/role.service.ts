import routes from './routes'

class RolService {
    //* -> Funcionalidad para obtener los roles
    async getRoles() {
        try {
            // -> response a la api
            const response = await fetch(routes.roles, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            return data
        } catch (error : unknown) {
            console.log(error)
        }
    }
}

const rolService = new RolService();
export default rolService;