import { inject } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import {
    ActivatedRouteSnapshot, 
    CanActivateFn, 
    CanMatchFn, 
    Route, 
    Router, 
    RouterStateSnapshot, 
    UrlSegment,} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const checkAuthStatus = (): Observable<boolean> => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap((isAuthenticated) => console.log('Authenticated:', isAuthenticated)),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          console.log('User not authenticated, navigating to login.');
          router.navigate(['./auth/login']);
        }
      }),
      map(isAuthenticated => isAuthenticated)  // El guard debe retornar un booleano
    );
}; 
   
// Tipado CanMatchFN
export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]) => {
  return checkAuthStatus();
};

// Tipado CanActivateFn
export const canActivateGuard: CanActivateFn = ( 
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  return checkAuthStatus();
};
