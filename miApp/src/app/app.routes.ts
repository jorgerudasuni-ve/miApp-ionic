import { Routes } from '@angular/router';

// EXPLICACIÓN DEL ESTUDIANTE: Configuro la matriz global de navegación.
// Enlazo cada dirección de la barra lateral con su respectivo archivo físico modular.
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
  },
  {
    path: 'personal',
    // INTERPRETACIÓN PROPIA: Enlazo la URL /personal con el componente autónomo que creamos por consola.
    loadComponent: () => import('./personal/personal.page').then( m => m.PersonalPage),
  },
  {
    path: 'contacto',
    // INTERPRETACIÓN PROPIA: Enlazo la URL /contacto con la vista de formulario del usuario.
    loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage),
  },
];