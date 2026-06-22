import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true, // INTERPRETACIÓN: Defino que es un componente independiente.
  // EXPLICACIÓN: Registro manualmente los tags que usé en el HTML para que Angular sepa cómo renderizarlos.
  imports: [IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonItem],
})
export class AppComponent {
  constructor() {}
}