import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';

import { AuthService } from './auth.service.ts.service';


@Injectable()

  export class AuthGuardService implements CanActivate{

    constructor(public auth:AuthService) { 

    }

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot){

      console.log(next)
 
      if(this.auth.isAuthenticated()){
          console.log("Paso");
          return true;
      }else{
          console.error("No paso");
          return false;
      }
      
    }

  }



