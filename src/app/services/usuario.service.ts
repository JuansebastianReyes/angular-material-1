import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: 'jsreyesg', nombre: 'Sebastian', apellido: 'Reyes', sexo: 'Masculino' },
    { usuario: 'vluna', nombre: 'Valentina', apellido: 'Luna', sexo: 'Femenino' },
    { usuario: 'jperez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino' },
    { usuario: 'mgomez', nombre: 'Marcela', apellido: 'Gomez', sexo: 'Femenino' },
    { usuario: 'ngarcia', nombre: 'Nicolas', apellido: 'Garcia', sexo: 'Masculino' },
    { usuario: 'afuentes', nombre: 'Andrea', apellido: 'Fuentes', sexo: 'Femenino' },

  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index : number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(user: Usuario){
    this.listUsuarios.unshift(user);
  }
}
