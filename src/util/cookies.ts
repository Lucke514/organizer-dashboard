class Cookies {
    //* -> Funcion para almacenar una cookie
    setCookie(name : string , value : string ) {
        document.cookie = `${name}=${value}; path=/`
    }

    //* -> Funcion para obtener una cookie
    getCookie(name : string) {
        const cookie = document.cookie
            .split(';')
            .find(cookie => cookie.includes(name))
        
        return cookie ? cookie.split('=')[1] : ''
    }

    //* -> Funcion para eliminar una cookie
    deleteCookie(name : string) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }
}

const cookies = new Cookies()
export default cookies