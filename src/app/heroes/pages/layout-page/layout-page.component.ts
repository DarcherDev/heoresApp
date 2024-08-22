import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/user.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  // Array de objetos que representan los elementos del sidebar
  public sidebarItems = [
    { label: 'listado', icon: 'label', url: './list'},
    { label: 'añadir', icon: 'add', url: './new-hero'},
    { label: 'Buscar', icon: 'search', url: './search'}
  ];
  constructor( 
    private authService : AuthService, 
    private router: Router
    ){}

    get user(): User | undefined{
      return this.authService.currentUser;
    }

    onLogout() {
      this.authService.logout();
      this.router.navigate(['/auth/login'])
    }
}
