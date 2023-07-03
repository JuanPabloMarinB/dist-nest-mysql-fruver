/// <reference types="node" />
import { Categoria } from './Categoria.entity';
import { Ventas } from './Ventas.entity';
import { Medida } from '../enums/Medida';
export declare class Producto {
    id: number;
    codigoBarra: number;
    nombre: string;
    medida: Medida;
    costoXunidad: number;
    precioVenta: number;
    fechaIngreso: string;
    cantidadIngresada: number;
    cantidadActual: number;
    avisoReposicion: boolean;
    imagen: Buffer;
    categoria: Categoria;
    ventas: Ventas;
    activo: boolean;
}
