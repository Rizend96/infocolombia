import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {adminService} from "../../../../services/admin.service";
import {NoticesService} from "../../../../services/notice.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass','admin-panel.component.grid..sass']
})
export class AdminPanelComponent implements OnInit {


  constructor(private router:Router, private  adminservice:adminService, private noticeService:NoticesService) { }

  ngOnInit() {
    this.noticeService.asignar_array()
  }

  salir(){
    this.router.navigate(['']);
  }


}
