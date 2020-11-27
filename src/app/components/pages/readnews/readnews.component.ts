import { Component, OnInit } from '@angular/core';
import {NoticesService} from "../../../services/notice.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Observer} from "rxjs";
import {Person} from "../../../models/person";

@Component({
  selector: 'app-readnews',
  templateUrl: './readnews.component.html',
  styleUrls: ['./readnews.component.sass'],
  providers: [NoticesService,Person]
})
export class ReadnewsComponent implements OnInit {

  constructor(private fb: FormBuilder,private person: Person, public noticeService:NoticesService,
              private active:ActivatedRoute) {
    this.validateForm = this.fb.group({
      nombre: ['', [Validators.required], [this.userNameAsyncValidator]],
      comment: ['', [Validators.required]],
    });
  }

  pos = this.noticeService.pos;


  ngOnInit() {
    this.pos = this.active.snapshot.params.code;

    console.log(this.noticeService.notices[this.pos].comentarios);

    var dateDay = new Date();
    console.log(dateDay);

    if(JSON.parse(localStorage.getItem('Comentario_Noticia'))){
      this.noticeService.notices = JSON.parse(localStorage.getItem('Comentario_Noticia'));
    }


  }

  validateForm: FormGroup;

  submitForm(value: { nombre: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
      var dateDay = new Date();
      this.person=value;
      this.person.fecha = dateDay;
      this.noticeService.notices[this.pos].comentarios.push(this.person);
      localStorage.setItem('Comentario_Noticia',JSON.stringify(this.noticeService.notices));

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
