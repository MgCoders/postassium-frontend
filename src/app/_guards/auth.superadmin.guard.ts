/**
 * Created by pablo on 03/10/18.
 */
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class SuperAdminGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticatedAndSuperAdmin()) {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
