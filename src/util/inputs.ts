export const formatRut = (rut: string) => {
    // Eliminar puntos y guión
    rut = rut.replace(/\./g, '').replace(/-/g, '')
    
    // Obtener dígito verificador
    const dv = rut.slice(-1)
    
    // Obtener cuerpo del RUT
    let rutBody = rut.slice(0, -1)
    
    // Formatear RUT
    rutBody = rutBody.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    
    return `${rutBody}-${dv}`
}

export const validateRut = (rut: string) => {
    // Eliminar puntos y guión
    rut = rut.replace(/\./g, '').replace(/-/g, '')
    
    if (rut.length < 2) return false
    
    const rutBody = rut.slice(0, -1)
    const dv = rut.slice(-1).toUpperCase()
    
    let sum = 0
    let multiplier = 2
    
    for (let i = rutBody.length - 1; i >= 0; i--) {
        sum += parseInt(rutBody.charAt(i)) * multiplier
        multiplier = multiplier === 7 ? 2 : multiplier + 1
    }
    
    const expectedDv = 11 - (sum % 11)
    const calculatedDv = expectedDv === 11 ? '0' : expectedDv === 10 ? 'K' : expectedDv.toString()
    
    return calculatedDv === dv
}