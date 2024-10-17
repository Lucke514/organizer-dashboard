export interface Option {
    value: string | number
    label: string
}

export interface Region extends Option {
    id_region: number
}

export interface province extends Option {
    id_region: number
    id_provincia: number
}

export interface Commune extends Option {
    id_provincia: number
    id_comuna: number
}