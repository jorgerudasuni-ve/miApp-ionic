import { Routes } from '@angular/router';

// EXPLICACIÓN DE ESTUDIANTE: Aquí configuro la tabla de rutas del proyecto.
// Cada enlace conecta una dirección web interna con su respectiva pantalla física.
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio', // Si la app abre vacía, redirijo automáticamente a la pestaña de inicio.
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    // INTERPRETACIÓN: Uso 'loadComponent' para activar la carga perezosa (Lazy Loading).
    // Esto hace que la página solo consuma memoria cuando el usuario hace clic en ella.
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'personal',
    loadComponent: () => import('./personal/personal.page').then(m => m.PersonalPage),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then(m => m.ContactoPage),
  },
];