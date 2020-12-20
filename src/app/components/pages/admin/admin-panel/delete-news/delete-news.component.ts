import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NoticesModel} from "../../../../../models/notice";
import {adminService} from "../../../../../services/admin.service";
import {NoticesService} from "../../../../../services/notice.service";

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.sass'],
  providers: [NoticesModel]
})
export class DeleteNewsComponent implements OnInit {



  ngOnInit() {

  }

  validateForm: FormGroup;

  submitForm(value: { product_id: string; }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.noticeservice = value;

    this.adminservice.Elimiar_noticia(this.noticeservice).subscribe((Dato)=>{
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
    });
  }

}
