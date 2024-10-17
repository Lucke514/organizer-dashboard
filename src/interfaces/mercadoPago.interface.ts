export interface MercadoPagoItem {
    title: string;
    unit_price: number;
    quantity: number;
}

export interface MercadoPagoPreference {
    items: MercadoPagoItem[];
}

export interface MercadoPagoPreferenceResponse {
    preferenceId: string;
}

