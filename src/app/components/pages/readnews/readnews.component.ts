import { Component, OnInit } from '@angular/core';
import {NoticesService} from "../../../services/notice.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Observer} from "rxjs";
import {Person} from '../../../models/person';
import {Detail} from "../../../models/detail";
import {adminService} from "../../../services/admin.service";

@Component({
  selector: 'app-readnews',
  templateUrl: './readnews.component.html',
  styleUrls: ['./readnews.component.sass'],
  providers: [NoticesService,Person,Detail]
})
export class ReadnewsComponent implements OnInit {

  constructor(private fb: FormBuilder, private person: Person, public noticeService:NoticesService,
              private active:ActivatedRoute, private detalle:Detail, private adminservice:adminService) {
    this.validateForm = this.fb.group({
      nombre: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  pos = this.noticeService.pos;

  // detalles:any = localStorage.getItem('Noticias') ;


  arreglo:any;

  ngOnInit() {
    // this.arreglo = JSON.stringify(localStorage.getItem('Noticias'));



    // this.adminservice.crear_detalle().subscribe((Dato)=>{
    //   console.log(Dato);
    // });


    // this.pos = this.active.snapshot.params.code;

    //
    // this.adminservice.detalle_noticia(this.pos).subscribe((Dato)=>{
    //   console.log(Dato);
    // });

    // console.log(this.noticeService.arraynotices[this.pos].detail);

    // var dateDay = new Date();
    // console.log(dateDay);
    //
    // if(JSON.parse(localStorage.getItem('Comentario_Noticia'))){
    //   this.noticeService.notices = JSON.parse(localStorage.getItem('Comentario_Noticia'));
    // }


  }

  validateForm: FormGroup;

  submitForm(value: { nombre: string; description: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }


    this.noticeService.arraydetail = value;
    this.noticeService.arraydetail.product_id = this.pos;


    this.adminservice.detalle_noticia(this.noticeService.arraydetail).subscribe((Dato)=>{
      console.log(Dato);
    });


      // var dateDay = new Date();
      // this.noticeService.arraynotices=value;
      // this.person.fecha = dateDay;
      // this.noticeService.notices[this.pos].comentarios.push(this.person);
      // localStorage.setItem('Comentario_Noticia',JSON.stringify(this.noticeService.notices));

      //console.log(this.noticeService.notices[this.pos].comentarios);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }


  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === '') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });


}
