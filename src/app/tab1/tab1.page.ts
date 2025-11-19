import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { shieldCheckmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton],
})
export class Tab1Page {
  constructor(private router: Router) {}

  // Função para navegar para a tela de conteúdo
  goToContent() {
    // Use uma rota absoluta para evitar problemas com navegação relativa
    this.router.navigateByUrl('/tabs/tab2');
  }
}

  addIcons({ shieldCheckmarkOutline })