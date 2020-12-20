import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NoticesModel} from "../../../../../models/notice";
import {adminService} from "../../../../../services/admin.service";
import {NoticesService} from "../../../../../services/notice.service";

@Component({
  selector: 'app-modify-news',
  templateUrl: './modify-news.component.html',
  styleUrls: ['./modify-news.component.sass'],
  providers: [NoticesModel]
})
export class ModifyNewsComponent implements OnInit {


  ngOnInit() {
    this.adminservice.queryProduct().subscribe((Dato)=>{
      console.log(Dato)
    })

  }

  validateForm: FormGroup;

  submitForm(value: { product_id: string; titulo: string; imagen: string; resumen: string; descripcion: string; nombre_proyecto: string; }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.noticeservice = value;
    this.noticeservice.precio = '1';

    this.adminservice.modificar_noticia(this.noticeservice).subscribe((Dato)=>{
      console.log(Dato);
    });

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
      product_id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      resumen: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      nombre_proyecto: ['', [Validators.required]],
      // comment: ['', [Validators.required]]
    });
  }

}
