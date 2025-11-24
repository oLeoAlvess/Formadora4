import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonModal } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack, close } from 'ionicons/icons';
import { TopicModalService } from '../services/topic-modal.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [CommonModule, IonHeader, IonIcon, IonToolbar, IonTitle, IonContent, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonModal]
})
export class Tab2Page {
  isModalOpen = false;
  modalTitle = '';
  modalContent = '';

  constructor(private router: Router, public modal: TopicModalService) {}

  getTopic(topic: 'lgpd' | 'direitos' | 'dicas') {
    // Preencher variáveis locais para garantir que o template do modal (que pode ser projetado)
    // tenha acesso direto ao conteúdo mesmo se estiver em outro contexto.
    const t = this.modal.getTopic(topic);
    if (t) {
      this.modalTitle = t.title;
      this.modalContent = t.content;
      this.isModalOpen = true;
      // Ainda atualiza o estado do serviço (caso outros listeners usem)
      this.modal.getTopic(topic);
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.modal.close();
  }

  goToQuiz() {
    this.router.navigate(['../tabs/tab3']); // Assumindo que a próxima tela é '/quiz'
  }

  goToHome() {
    this.router.navigate(['../tabs/tab1']); // Assumindo que a próxima tela é '/home'
  }

}
addIcons({ close, arrowBack })