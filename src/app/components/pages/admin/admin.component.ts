import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from '../../../models/person';
import {AuthServices} from '../../../services/auth.service';
import {environment} from "../../../../environments/environment";
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass', 'admin.componen.grid.sass'],
  providers: [Person]
})

export class AdminComponent implements OnInit {
  URL = environment.URL;
  public API:string;
  messages:string;
  message:any;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private persona:Person,
              private authsevice:AuthServices,
              private router:Router) {
    this.API = environment.API;
  }



  iniciarSesion(value){
    this.persona=value;
    this.persona.getToken = true;
    this.authsevice.state = false;
    this.authsevice.login(this.persona).subscribe((Token)=>{

      let token = Token['data'];
      // console.log(Token)
      if(token['status'] == 'success'){

        console.log(Token)
        this.authsevice.Header(token['data']);
        localStorage.setItem('Token', JSON.stringify(token['data']));
        this.authsevice.state = true;
        this.persona.getToken = false;
      }

      this.authsevice.login(this.persona).subscribe((Data)=>{


        let data = Data['data'];

        if(data['status'] == 'success'){

          this.authsevice.people = data['data'];
          console.log(this.authsevice.people);
          this.authsevice.profile = data['profile'];
          this.authsevice.state = true;
          localStorage.setItem('Data', JSON.stringify(token['data']));

          setTimeout(()=>{
            this.router.navigate(['/panel']);
          }, 300);
        }
      },error => {
        this.messages= error.message;
        //this.isLoading = false;
      });
    })
  }

  createMessage(type: string, message:string):void {
    this.message.create(type, message);
}


  submitForm(value: { code: string, password:string}): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    //this.persona=value;
    this.iniciarSesion(value)
  }



  ngOnInit(): void {
    this.validateForm = this.fb.group({
      code: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
