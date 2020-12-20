import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {AuthServices} from './auth.service';
import {Person} from "../models/person";
import {NoticesModel} from "../models/notice";
@Injectable({
  providedIn: "root"
})

export class adminService{

  constructor(
    private authService: AuthServices,
    private httpClient: HttpClient
  ) { }

  notices: NoticesModel = {
    nombre_proyecto:null,
    titulo:null,
    descripcion:null,
    resumen:null,
    precio:'0',
    color:null,
    imagen:null,
    marca:null,
    ubicacion:null,
    destacado:null,
    state:null

  };

  update: NoticesModel = {
    product_id:null,
    nombre_proyecto:null,
    titulo:null,
    descripcion:null,
    resumen:null,
    precio:'0',
    color:null,
    imagen:null,
    marca:null,
    ubicacion:null,
    destacado:null,
    state:null
  };

  crear_noticia(notices: NoticesModel){
    return this.httpClient.post(this.authService.API + 'add/product', notices, {headers: this.authService.headers});
  }

  modificar_noticia(update: any) {
    return this.httpClient.put(this.authService.API + 'update/product', update, {headers: this.authService.headers});
  }

  restoreProduct(code: any){
    return this.httpClient.put(this.authService.API + 'restore/product', {'code': code} ,{headers: this.authService.headers});
  }

  Elimiar_noticia(del: any){
    return this.httpClient.put(this.authService.API + 'delete/product', {'product_id': del} ,{headers: this.authService.headers});
  }

  queryProduct() {
    return this.httpClient.post(this.authService.API + 'query/product', {'product_id': '2'}, {headers: this.authService.headers});
  }

  detalle_noticia(detalle: any) {
    return this.httpClient.post(this.authService.API + 'query/detail', {'detail_id': detalle}, {headers: this.authService.headers});
  }

  crear_detalle() {
    return this.httpClient.post(this.authService.API + 'add/detail', { 'product_id': 4,'detail_id': 0, 'description': 'Ninguna', 'nombre': 'Oscar','state': '1' }, {headers: this.authService.headers});
  }





  product(){
    return this.httpClient.get(this.authService.API + 'product/all', {headers: this.authService.headers});
  }

}
