import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Person} from '../models/person';

@Injectable({
  providedIn: 'root'
})

export class AuthServices {

  public API: string;
  headers: HttpHeaders;
  TOKEN: any;
  router: Router;
  state: boolean;
  HEADER: HttpHeaders;

  people: Person = {
    name: null,
    last_name:null,
    code:null,
    password:null,
    state:null

  };

  profile=[]
  // permission: permission = {
  //   name: null,
  //   state: null
  // }

  constructor(
      private httpClient: HttpClient,

  ) {
    this.header();
    this.API = environment.API;
    this.HEADER = new HttpHeaders({
      'Authorization': this.TOKEN
    });
  }

  login(people: Person){

    return this.httpClient.post(this.API + 'login', people, {headers: this.headers});
  }

  adminLogin(people: Person){

    return this.httpClient.post(this.API + 'adminLogin', people, {headers: this.headers});
  }

  // personalInformationClient(user){
  //
  //   return this.httpClient.post(this.API + 'personalInformationClient', {'userName': user}, {headers: this.headers});
  // }

  personalInformationAdmin(user){

    return this.httpClient.post(this.API + 'personalInformationAdmin', {'userName': user}, {headers: this.headers});
  }

  token(){

    let token = JSON.parse(localStorage.getItem('token'));
    if(token){
      this.state = true;
      return token;
    }
  }

  header(){
    this.TOKEN = this.token();
    if(this.TOKEN){
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.TOKEN
      });
    }else{

      this.headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
    return this.headers;
  }

  Header(token){
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
  }
}
