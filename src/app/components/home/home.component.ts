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
  validMessage: string = "";

  constructor() {

    this.bikeform = new FormGroup({
      //@AlejoCarmona
      //validamos mediante un regular expresion que el campo "name"
      // de nuestro form comience con un @ seguido de minimo 1 y maximo 15 caracteres	
      //alfa numericos
      name: new FormControl('', [Validators.required, Validators.pattern('@([A-Za-z0-9_]{1,15})')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // validamos mediante una RegExp el formato del telefono
      //+54 4545 1522565656
      phone: new FormControl('', [Validators.required, Validators.pattern('\\+54\\s[0-9]{1,4}\\s15[0-9]{8}')]),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', [Validators.required]),//, Validators.pattern('(([1-2][0-9])|([1-9])|(3[0-1]))-((1[0-2])|([1-9]))-[0-9]{4}')]),
      contact: new FormControl('', Validators.required),
    })

  }

  ngOnInit(): void {
  }

  submitRegistration() {
    if (this.bikeform.valid) {//chequeamos si el formulario es valido
      this.validMessage = 'Su formulario se envio con exito!';
      console.log(this.bikeform.value);
      this.bikeform.reset();//limpia el formulario
    } else {
      this.validMessage = 'Su formulario esta Incompleto!';
    }
  }


}