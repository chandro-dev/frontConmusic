import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Eliminar un elemento del localStorage
  eliminarElemento(key: string): void {
    localStorage.removeItem(key);
  }
  agregarElemento(key: string, valor: any): void {
    localStorage.setItem(key, JSON.stringify(valor));
  }
  obtenerElemento<T>(key: string): T | null {
    const valor = localStorage.getItem(key);
    return valor ? JSON.parse(valor) : null;
  }
}
