import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true, // EXPLICACIÓN: Declara de forma explícita que es un componente autónomo (independiente).
  // INTERPRETACIÓN PROPIA: En el arreglo de 'imports' registro manualmente cada etiqueta que utilicé en el HTML.
  // Esto es vital en la versión moderna de Ionic, solucionando de raíz el error de compilación NG8001.
  imports: [IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem],
})
export class AppComponent {
  constructor() {}
}