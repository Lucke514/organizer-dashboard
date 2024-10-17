import { importanciaTarea, dificultadTarea, estadoTarea } from "@/hooks/task";

// -> Funciones para obtener valores de tarea dependiendo del valor
export const getImportanciaTarea = (value: number) => {
    const item = importanciaTarea.find((item) => item.value === value);
    return item ? item.label : "";
};

export const getDificultadTarea = (value: number) => {
    const item = dificultadTarea.find((item) => item.value === value);
    return item ? item.label : "";
}

export const getEstadoTarea = (value: number) => {
    const item = estadoTarea.find((item) => item.value === value);
    return item ? item.label : "";
}