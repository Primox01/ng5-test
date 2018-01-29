import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { Command } from 'selenium-webdriver';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    
    console.log(form.value);

    if(form.value.usuario === "camilo" && form.value.password === "1234"){
      this._dataService.setLoggedIn(true);   
      this.router.navigate(['/home']);
    }else{
      this._dataService.setLoggedIn(false);
    }
  }

}
