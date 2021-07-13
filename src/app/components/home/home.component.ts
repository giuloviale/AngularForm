import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Bike 14 sony',
    'Bike grand cheroke',
    'Globo Carbon fiber Race Series',
    'Bike Pro 265',
    'Bike Covid',
    'Bike Aztraseneca'
  ];

  bikeform: FormGroup;
  validmessage: string = "";

  constructor() {

    this.bikeform = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      model: new FormControl('',Validators.required),
      serialNumber: new FormControl(),
      purchasePrice: new FormControl(),
      purchaseDate: new FormControl(),
      contact: new FormControl(),
    })

  }

  ngOnInit(): void {
  }

}