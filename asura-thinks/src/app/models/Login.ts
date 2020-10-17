export interface User {
  nombre: string;
  password: string;
  password_re: string;
  fecha?: Date;
  actividad: string;
  foto_perfil: string;
}
