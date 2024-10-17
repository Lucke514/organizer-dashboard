export interface Task {
    id_tarea: number;
    titulo: string;
    descripcion: string;
    tiempo_estimado: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    fecha_creacion: Date;
    fecha_actualizacion: Date;
    id_estado: number;
    id_importancia: number;
    id_dificultad: number;
    creator : string;
}

export interface Tasks {
    tareas: Task[];
}