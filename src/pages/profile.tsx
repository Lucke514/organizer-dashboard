import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Select from "react-select"
import { CalendarIcon } from "lucide-react"
import { es } from "date-fns/locale"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { paises, regiones, provincias, comunas } from "@/hooks/geology"
import { generoPersona, estadoCivil, tipoDocumento } from "@/hooks/person"
import personService from "@/services/person.service"
import { Person } from "@/interfaces/person.interface"
import { Loader } from "@/shared/loader"
import toast, { Toaster } from 'react-hot-toast'
import { formatRut, validateRut } from "@/util/inputs"
import { selectStyles } from '../hooks/selectStyles';


export default function Profile() {
    const [personalInformation, setPersonalInformation] = useState<Person | null>(null)
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [selectedRegion, setSelectedRegion] = useState<{ value: number; label: string } | null>(null)
    const [selectedProvincia, setSelectedProvincia] = useState<{ value: number; label: string } | null>(null)
    const [, setSelectedComuna] = useState<{ value: number; label: string } | null>(null)
    const [filteredProvincias, setFilteredProvincias] = useState<{ value: number; label: string; id_region: number; }[]>([])
    const [filteredComunas, setFilteredComunas] = useState<{ value: number; label: string; id_provincia: number; }[]>([])
    const [isRutValid, setIsRutValid] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPersonalInformation = async () => {
            try {

                // -> En caso que ya se haya cargado la información personal, no se vuelve a cargar
                if (personalInformation) {
                    setIsLoading(false)
                    return
                }

                const response = await personService.GetPersonalInformation()
                if (response) {
                    setPersonalInformation(response)
                    setDate(new Date(response.fecha_nacimiento))
                    setSelectedRegion(regiones.find(region => region.value === response.id_region) || null)
                    setSelectedProvincia(provincias.find(provincia => provincia.value === response.id_provincia) || null)
                    handleRegionChange({ value: response.id_region, label: regiones.find(region => region.value === response.id_region)?.label || '' })
                    handleProvinciaChange({ value: response.id_provincia, label: provincias.find(provincia => provincia.value === response.id_provincia)?.label || '' })
                    handleComunaChange({ value: response.id_comuna, label: comunas.find(comuna => comuna.value === response.id_comuna)?.label || '' })
                }
            } catch (error) {
                console.error("Error fetching personal information:", error)
                toast.error('Error al cargar la información personal')
            } finally {
                setIsLoading(false)
            }
        }

        fetchPersonalInformation()
    }, [])


    //* -> Funcionalidad para gestionar los cambios de region, provincia y comuna
    const handleRegionChange = (selectedOption: any) => {
        setSelectedRegion(selectedOption)
        const filteredProvs = provincias.filter(provincia => provincia.id_region === selectedOption.value)
        setFilteredProvincias(filteredProvs)
        setSelectedProvincia(null)
        setFilteredComunas([])
        setPersonalInformation(prev => prev ? { ...prev, id_region: selectedOption.value, id_provincia: null as any } : null)
    }

    const handleProvinciaChange = (selectedOption: any) => {
        setSelectedProvincia(selectedOption)
        const filteredComs = comunas.filter(comuna => comuna.id_provincia === selectedOption.value)
        setFilteredComunas(filteredComs)
        setPersonalInformation(prev => prev ? { ...prev, id_provincia: selectedOption.value, id_comuna: null as any } : null)
    }

    const handleComunaChange = (selectedOption: any) => {
        setSelectedComuna(selectedOption)
        setPersonalInformation(prev => prev ? { ...prev, id_comuna: selectedOption.value } : null)
    }

    //* -> Funcionalidad para gestionar los cambios de los inputs y selects
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === 'numero_documento' && personalInformation?.id_tip_documento === 1) {
            const formattedRut = formatRut(value)
            setPersonalInformation(prev => prev ? { ...prev, [name]: formattedRut } : null)
            setIsRutValid(validateRut(formattedRut))
        } else {
            setPersonalInformation(prev => prev ? { ...prev, [name]: value } : null)
        }
    }

    const handleSelectChange = (name: string) => (selectedOption: any) => {
        setPersonalInformation(prev => prev ? { ...prev, [name]: selectedOption.value } : null)
        if (name === 'id_tip_documento') {
            setPersonalInformation(prev => prev ? { ...prev, numero_documento: '' } : null)
            setIsRutValid(true)
        }
    }

    //* -> Funcionalidad para gestionar el envio del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!personalInformation) return

        setIsSubmitting(true)

        try {
            const response = await personService.UpdatePersonalInformation(personalInformation)

            if (response) {
                toast.success('Información personal actualizada correctamente')
                console.log('Información personal actualizada:', personalInformation)
            } else {
                toast.error('Error al actualizar la información personal')
            }
        } catch (error) {
            toast.error('Error al actualizar la información personal')
            console.error('Error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    //* -> Renderizado de la vista
    if (isLoading) {
        return <Loader />
    }

    if (!personalInformation) {
        return <div>No se pudo cargar la información personal.</div>
    }

    return (
        <main className="max-w-full h-full flex justify-center">
            <Toaster position="top-right" />
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Editar Perfil</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="nombre">Nombre</Label>
                                <Input id="nombre" name="nombre" value={personalInformation.nombre} onChange={handleInputChange} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="apellido_paterno">Apellido Paterno</Label>
                                <Input id="apellido_paterno" name="apellido_paterno" value={personalInformation.apellido_paterno} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="apellido_materno">Apellido Materno</Label>
                                <Input id="apellido_materno" name="apellido_materno" value={personalInformation.apellido_materno} onChange={handleInputChange} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="fecha_nacimiento">Fecha de Nacimiento</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={(newDate) => {
                                                setDate(newDate)
                                                setPersonalInformation(prev => prev ? { ...prev, fecha_nacimiento: newDate || new Date() } : null)
                                            }}
                                            locale={es}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="telefono">Teléfono</Label>
                                <Input id="telefono" name="telefono" value={personalInformation.telefono} onChange={handleInputChange} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="direccion">Dirección</Label>
                                <Input id="direccion" name="direccion" value={personalInformation.direccion} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="numero_documento">
                                    {personalInformation?.id_tip_documento === 1 ? 'RUT' : 'Número de Pasaporte'}
                                </Label>
                                <Input
                                    id="numero_documento"
                                    name="numero_documento"
                                    value={personalInformation?.numero_documento}
                                    onChange={handleInputChange}
                                    className={personalInformation?.id_tip_documento === 1 && !isRutValid ? 'border-red-500' : ''}
                                />
                                {personalInformation?.id_tip_documento === 1 && !isRutValid && (
                                    <p className="text-red-500 text-sm mt-1">RUT inválido</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="id_tip_documento">Tipo de Documento</Label>
                                <Select
                                    options={tipoDocumento}
                                    value={tipoDocumento.find(td => td.value === personalInformation?.id_tip_documento)}
                                    onChange={handleSelectChange('id_tip_documento')}
                                    placeholder="Seleccionar Tipo de Documento"
                                    styles={selectStyles}
                                    classNamePrefix="react-select"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="id_genero">Género</Label>
                                <Select
                                    options={generoPersona}
                                    value={generoPersona.find(g => g.value === personalInformation.id_genero)}
                                    onChange={handleSelectChange('id_genero')}
                                    placeholder="Seleccionar Género"
                                    styles={selectStyles}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="id_estado_civil">Estado Civil</Label>
                                <Select
                                    options={estadoCivil}
                                    value={estadoCivil.find(ec => ec.value === personalInformation.id_estado_civil)}
                                    onChange={handleSelectChange('id_estado_civil')}
                                    placeholder="Seleccionar Estado Civil"
                                    styles={selectStyles}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="id_pais">País</Label>
                                <Select
                                    options={paises}
                                    value={paises.find(p => p.value === personalInformation.id_pais)}
                                    onChange={handleSelectChange('id_pais')}
                                    placeholder="Seleccionar País"
                                    styles={selectStyles}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="id_region">Región</Label>
                                <Select
                                    options={regiones}
                                    value={selectedRegion}
                                    onChange={handleRegionChange}
                                    placeholder="Seleccionar Región"
                                    styles={selectStyles}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="id_provincia">Provincia</Label>
                                <Select
                                    options={filteredProvincias}
                                    value={selectedProvincia}
                                    onChange={handleProvinciaChange}
                                    placeholder="Seleccionar Provincia"
                                    styles={selectStyles}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isDisabled={!selectedRegion}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="id_comuna">Comuna</Label>
                                <Select
                                    options={filteredComunas}
                                    value={filteredComunas.find(c => c.value === personalInformation.id_comuna)}
                                    onChange={handleSelectChange('id_comuna')}
                                    placeholder="Seleccionar Comuna"
                                    styles={selectStyles}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isDisabled={!selectedProvincia}
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end h-full items-end mt-2">
                            <Button type="submit" disabled={isSubmitting || !isRutValid}>
                                Guardar Cambios
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}