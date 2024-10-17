import { MercadoPagoItem } from "@/interfaces/mercadoPago.interface";

class mercadoPagoService {
    async createPreference(item: MercadoPagoItem): Promise<string | any> {
        try {
            const response : any = await fetch('http://localhost:8080/api/createPreference', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer TEST-2ca1b32e-05bd-44c2-9a78-5a46f86b1887',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [
                        {
                            title: item.title,
                            unit_price: item.unit_price,
                            quantity: item.quantity,
                        },
                    ],
                }),
            });

            const { preferenceId } = await response.json();

            return preferenceId;

        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
}

const MercadoPagoService = new mercadoPagoService();
export default MercadoPagoService;