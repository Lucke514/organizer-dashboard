export const importanciaTarea = [
    { value: 1, label: "No importante", description: "Tareas que tienen poco o ningún impacto en el resultado o que podrían ser delegadas o eliminadas del todo." },
    { value: 2, label: "Baja importancia", description: "Tareas útiles o beneficiosas, pero no son necesarias de inmediato. Pueden ser pospuestas sin afectar de manera significativa el resultado final." },
    { value: 3, label: "Media importancia", description: "Tareas importantes pero no urgentes. Su impacto es moderado, generalmente pueden ser programadas para un plazo más largo sin mayores inconvenientes." },
    { value: 4, label: "Alta importancia", description: "Tareas esenciales para el progreso y éxito de un proyecto o actividad. No son críticas, pero su retraso puede tener consecuencias negativas." },
    { value: 5, label: "Crítica", description: "Tareas que deben realizarse de inmediato porque tienen un impacto significativo. Si no se completan, pueden causar problemas graves o fallos en el proyecto o negocio." }
];

export const estadoTarea = [
    { value: 1, label: "Pendiente", description: "La tarea ha sido creada pero aún no se ha comenzado. Está en la lista de cosas por hacer." },
    { value: 2, label: "En progreso", description: "La tarea ha comenzado y está siendo trabajada activamente. Se encuentra en proceso de ejecución." },
    { value: 3, label: "En espera", description: "La tarea ha sido iniciada, pero está detenida temporalmente. Puede estar esperando información, aprobación o algún recurso necesario." },
    { value: 4, label: "Revisando", description: "La tarea ha sido completada por el responsable, pero está en revisión. Puede necesitar aprobación o validación de otra persona o equipo." },
    { value: 5, label: "Bloqueada", description: "La tarea no puede progresar debido a un obstáculo o problema que necesita ser resuelto antes de continuar." },
    { value: 6, label: "Completada", description: "La tarea ha sido finalizada con éxito. Todo el trabajo necesario está hecho y ha sido aprobado si era necesario." },
    { value: 7, label: "Cancelada", description: "La tarea ha sido eliminada del plan o descartada por alguna razón. Puede ser porque ya no es relevante, se duplicó, o cambió la prioridad." },
    { value: 8, label: "Archivada", description: "La tarea se marca como finalizada y se archiva para referencia futura, sin necesidad de más acción." }
];

export const dificultadTarea = [
    { value: 1, label: "Muy fácil", description: "Tareas simples que requieren poco tiempo y esfuerzo." },
    { value: 2, label: "Fácil", description: "Tareas directas que requieren poco esfuerzo y tiempo moderado." },
    { value: 3, label: "Moderada", description: "Tareas con cierta complejidad que requieren esfuerzo y planificación." },
    { value: 4, label: "Difícil", description: "Tareas complejas que requieren habilidades avanzadas y tiempo considerable." },
    { value: 5, label: "Muy difícil", description: "Tareas altamente complejas que requieren mucho tiempo, recursos y coordinación." }
];
