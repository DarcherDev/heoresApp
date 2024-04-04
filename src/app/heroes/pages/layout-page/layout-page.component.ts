import { Component } from '@angular/core';

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
}
