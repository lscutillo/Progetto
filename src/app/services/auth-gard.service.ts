import { Router, CanActivateChild} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivateChild{
    constructor(private router: Router) {}
    
    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (!sessionStorage.username) {
            this.router.navigateByUrl('/login');
            return false;
        } else {
            return true;
        }
    }
}