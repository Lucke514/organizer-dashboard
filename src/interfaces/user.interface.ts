export interface user {
    id_usuario : number;
    email : string;
    password : string;
    fecha_creacion : Date;
    fecha_actualizacion : Date;
    id_rol : number;
    id_est_usuario : number;
}

export interface userRegister {
    email : string;
    password : string;
    id_rol : number;
}

export interface userLogin {
    email : string;
    password : string;
    rememberMe : boolean;
}

export interface createUserToken {
    token : string;
    fecha_creacion : Date;
    fecha_expiracion : Date;
    id_usuario : number;
    id_est_tok_usuario : number;
}

export interface userToken {
    id_tok_usuario : number;
    token : string;
    fecha_creacion : Date;
    fecha_expiracion : Date;
    id_usuario : number;
    id_est_tok_usuario : number;
}