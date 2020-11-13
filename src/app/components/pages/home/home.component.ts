import { Component, OnInit } from '@angular/core';
import { Person } from "../../../models/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass',
              './home.component.grid.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imagesHome:any = [
    {
      "imagen": 'assets/images_home/arc_victoria.png',
      "descripcion": "Hunter TR-12"
    },
    {
      "imagen": 'assets/images_home/cobra.png',
      "descripcion": "Vehículo Táctico Cobra"
    },
    {
      "imagen": 'assets/images_home/HunterTR-12.png',
      "descripcion": "OPV ARC \"7 de Agosto\""
    },
    {
      "imagen": 'assets/images_home/LPR-40.png',
      "descripcion": "Patrullera fluvial LPR-40"
    },
  ];

}
