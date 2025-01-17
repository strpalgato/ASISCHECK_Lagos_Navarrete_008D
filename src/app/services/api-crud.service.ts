import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users, QrCodes, Recursos, Registros } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  // Método para obtener todos los usuarios.
  // Devuelve un observable de tipo `Users[]`.
  ObtenerUsuarios(): Observable<Users[]> {
    return this.httpclient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  // Método para crear un nuevo usuario.
  // Toma un objeto `newUsuario` de tipo `Users` y devuelve un observable de tipo `Users`.
  CrearUsuario(newUsuario: Users): Observable<Users>{
  // Realiza una solicitud POST para crear un usuario en la URL definida en `environment.apiUrl`.
  // El nuevo usuario se pasa como el cuerpo de la solicitud.
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  CambiarContrasenaUsuario(id: number, nuevaContrasena: string): Observable<any> {
    const body = { password: nuevaContrasena };

    return this.httpclient.put<any>(`${environment.apiUrl}/usuarios/${id}/cambiar-contrasena`, body);
  }

  // Método para actualizar los datos del usuario.
  // Toma el ID del usuario y un objeto `datosActualizados` de tipo `Users`.
  // Devuelve un observable de tipo `Users`.
  ActualizarUsuario(id: number, datosActualizados: Partial<Users>): Observable<Users> {
    return this.httpclient.put<Users>(`${environment.apiUrl}/usuarios/${id}`, datosActualizados);
  }

  CrearQrCode(newQrCode: QrCodes): Observable<QrCodes>{
    return this.httpclient.post<QrCodes>(`${environment.apiUrl}/qr-codes`, newQrCode);

  }

  CrearRegistro(newRegistro: Registros): Observable<Registros>{
    return this.httpclient.post<Registros>(`${environment.apiUrl}/registros`, newRegistro);
  }

   // Método para obtener todos los recursos.
  // Devuelve un observable de tipo `Recurso[]`.
  ObtenerRecursos(): Observable<Recursos[]> {
    return this.httpclient.get<Recursos[]>(`${environment.apiRecursos}/archivos`);
  }

  // Método para obtener un recurso por ID.
  // Toma el ID del recurso y devuelve un observable de tipo `Recurso`.
  ObtenerRecursoPorId(id: number): Observable<Recursos> {
    return this.httpclient.get<Recursos>(`${environment.apiRecursos}/archivos/${id}`);
  }




}
