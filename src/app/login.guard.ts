import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from './services/data.service';


@Injectable()
export class LoginGuard implements CanActivate{
  

  constructor(private router: Router, private _dataService: DataService){
  }
  
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  
    if(this._dataService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['']);      
      return false;
    }
  

  }
}
