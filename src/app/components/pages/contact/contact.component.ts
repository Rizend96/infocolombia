import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Observer} from "rxjs";
import {Person} from "../../../models/person";
import {NoticesService} from "../../../services/notice.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass',
              './contact.component.grid.sass'],
  providers : [Person,NoticesService]
})
export class ContactComponent implements OnInit {


  constructor(private fb: FormBuilder,private person: Person, private notice:NoticesService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  validateForm: FormGroup;

  submitForm(value: { userName: string; lastName: string; email: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    // console.log(value);
    this.person=value;
    //this.notice.comentario.push(value);
    console.log(this.person);
    sessionStorage.setItem('Usuario',JSON.stringify(this.person));
    console.log("Imprimir valor");
    console.log(value);
    //console.log(this.notice.comentario);
    //localStorage.setItem('Comentario',JSON.stringify(this.notice.comentario));
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }


  // userNameAsyncValidator = (control: FormControl) =>
  //   new Observable((observer: Observer<ValidationErrors | null>) => {
  //     setTimeout(() => {
  //       if (control.value.userName === control.value.lastName) {
  //         // you have to return `{error: true}` to mark it as an error event
  //         observer.next({ error: true, duplicated: true });
  //       } else {
  //         observer.next(null);
  //       }
  //       observer.complete();
  //     }, 1000);
  //   });

  // lastNameAsyncValidator = (control: FormControl) =>
  //   new Observable((observer: Observer<ValidationErrors | null>) => {
  //     setTimeout(() => {
  //       if (control.value.lastName === control.value.userName) {
  //         // you have to return `{error: true}` to mark it as an error event
  //         observer.next({ duplicated: true });
  //       } else {
  //         observer.next(null);
  //       }
  //       observer.complete();
  //     }, 1000);
  //   });

}
