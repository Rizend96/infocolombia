import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Observer} from "rxjs";
import {adminService} from "../../../../../services/admin.service";
import {NoticesModel} from "../../../../../models/notice";
import {NoticesService} from "../../../../../services/notice.service";

@Component({
  selector: 'app-create-notices',
  templateUrl: './create-notices.component.html',
  styleUrls: ['./create-notices.component.sass'],
  providers: [NoticesModel]
})
export class CreateNoticesComponent implements OnInit {



  ngOnInit() {

  }

  validateForm: FormGroup;

  submitForm(value: { titulo: string; imagen: string; resumen: string; descripcion: string; nombre_proyecto: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.noticeservice = value;
    this.noticeservice.precio = '1';
    //console.log(this.noticeservice);
    this.adminservice.crear_noticia(this.noticeservice).subscribe((Dato)=>{
      console.log(Dato);
    });

    this.noticestart.asignar_array();

  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }



  constructor(private fb: FormBuilder,
              private noticeservice:NoticesModel,
              private  adminservice:adminService,
              private noticestart:NoticesService) {
    this.validateForm = this.fb.group({
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      resumen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      nombre_proyecto: ['', [Validators.required]],
      // comment: ['', [Validators.required]]
    });
  }


}
