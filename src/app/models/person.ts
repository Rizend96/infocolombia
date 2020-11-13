export class Person{
  private nombre?:string;
  private email?:string;
  private comentario?:string;

  set setNombre(valor:string){
    this.nombre = valor;
  }
  get getNombre(){
    return this.nombre;
  }

}
