import cookies from '@/util/cookies';
import routes from './routes'
import { Person } from '@/interfaces/person.interface';

class PersonService {
    //* -> Funcionalidad para poder realizar una peticion al backend y poder obtener la informacion personal
    async GetPersonalInformation() : Promise<Person | null | undefined> {
        try {
            const token : string = cookies.getCookie('token')

            if (!token) {
                throw new Error('No existe un token')
            }

            const response = await fetch(routes.personalInformation, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) {
                throw new Error('No se pudo obtener la informacion personal')
            }
            
            const data = await response.json()

            return data.data[0]
        }  catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message)
                return null
            }
        }
    }

    async UpdatePersonalInformation(person : Person) : Promise<boolean | undefined> {
        try {
            const token : string = cookies.getCookie('token')

            if (!token) {
                throw new Error('No existe un token')
            }

            const response = await fetch(routes.updatePersonalInformation, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(person)
            })

            if (!response.ok) {
                throw new Error('No se pudo actualizar la informacion personal')
            }

            return true
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.error(error.message)
                return false
            }
        }
    }

}

const personService = new PersonService();
export default personService;