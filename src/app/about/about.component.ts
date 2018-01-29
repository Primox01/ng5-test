import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private _data: DataService, private router: Router) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  public logout(){
    this._data.setLoggedIn(false);
    this.router.navigate(['']);
  }

}
