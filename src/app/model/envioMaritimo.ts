export interface EnvioMaritimo {
    id: string;
    cliente: string;
    producto: string;
    cantidad: number;
    fecha_registro: Date;
    fecha_entrega: Date;
    puerto_entrega: string;
    precio_envio: number;
    numero_flota: string;
    numero_guia: string;
    descuento: number;
  }
  