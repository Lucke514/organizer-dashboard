export default class routes {
    //? -> Produccion y desarrollo
    // static url : string = 'https://api.organizer.cl/api';
    static url : string = 'http://localhost:8080/api/';

    
    // * -> Rutas de usuario
    static user : string = `${routes.url}/user`;
    static userById : string = `${routes.user}/:id`;
    static userUpdate : string = `${routes.user}/update`;

    // * -> Rutas de persona
    static personalInformation : string = `${routes.url}/personalInformation`;
    static updatePersonalInformation : string = `${routes.personalInformation}/update`;

    // * -> Rutas de autenticación
    static login : string = `${routes.url}/login`;
    static register : string = `${routes.url}/register`;
    static checkSession : string = `${routes.url}/checkSession`;
    static activate : string = `${routes.url}/activate`;
    static forgot : string = `${routes.url}/forgot`;

    // * -> Rutas de tareas
    static tasks : string = `${routes.url}/tasks`;

    // * -> Rutas de roles
    static roles : string = `${routes.url}/roles`;    
}