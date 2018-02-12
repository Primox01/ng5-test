import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add an item";
  goalText: string = "My first life time goal";
  goals = [];
  
  constructor(private _data: DataService, private router: Router) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;    
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
    
  }

  removeItem(i){
    this.goals.splice(i,1);
    this.itemCount = this.goals.length;    
    this._data.changeGoal(this.goals);    
  }

  public logout(){
    this._data.setLoggedIn(false);
    this.router.navigate(['']);
  }

}
