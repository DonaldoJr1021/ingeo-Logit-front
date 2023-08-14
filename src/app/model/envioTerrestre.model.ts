export interface EnvioTerrestre {
    id: string;
    cliente: string;
    producto: string;
    cantidad: number;
    fecha_registro: Date
    fecha_entrega: Date;
    bodega_entrega: string;
    precio_envio: number;
    placa_vehiculo: string;
    numero_guia: string;
    descuento: number;
  }
  