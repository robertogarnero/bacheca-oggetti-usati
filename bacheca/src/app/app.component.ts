import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registrazione } from './registrazione.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacheca';
  
  formRegistrazione: FormGroup;
  valori: Registrazione;
  
  constructor(fb: FormBuilder){
    this.formRegistrazione = fb.group ({'user': ['', Validators.required], 'password': ['', Validators.required]})
  }
  
}