import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([]);
  goal = this.goals.asObservable();

  private loggedIn: boolean;

  constructor() { }
  
  changeGoal(goal){
    this.goals.next(goal);
  }

  public isLoggedIn(): boolean{
    return this.loggedIn;
  }

  public setLoggedIn(_loggedIn: boolean){
    this.loggedIn = _loggedIn;
  }

}
