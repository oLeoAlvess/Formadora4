import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonButton, IonCardContent, } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
interface Question {
  text: string;
  options: string[];
  correctAnswerIndex: number;
}


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonButton, IonCardContent],
  standalone: true,
})
export class Tab3Page {
  constructor(private router: Router) {}
  
  // Dados do Quiz
  questions: Question[] = [
    {
      text: 'Qual o principal objetivo da LGPD?',
      options: ['Facilitar o comércio eletrônico', 'Proteger os dados pessoais dos cidadãos', 'Controlar o uso de redes sociais'],
      correctAnswerIndex: 1,
    },
    {
      text: 'Qual dos seguintes é um direito do titular de dados?',
      options: ['Obrigação de fornecimento de dados', 'Direito de eliminação dos dados tratados', 'Direito de venda dos dados a terceiros'],
      correctAnswerIndex: 1,
    },
    {
      text: 'O que é Phishing?',
      options: ['Uma técnica de criptografia avançada', 'Uma tentativa de fraude para roubar dados, simulando uma entidade confiável', 'Um tipo de software antivírus'],
      correctAnswerIndex: 1,
    }
  ];

  // Variáveis de Estado do Quiz
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedAnswerIndex: number | null = null;
  answerSelected: boolean = false;
  isCorrect: boolean = false;
  quizFinished: boolean = false;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  // Função chamada ao selecionar uma opção de resposta
  answerQuestion(selectedIndex: number) {
    if (this.answerSelected) return;

    this.answerSelected = true;
    this.selectedAnswerIndex = selectedIndex;
    this.isCorrect = selectedIndex === this.currentQuestion.correctAnswerIndex;

    if (this.isCorrect) {
      this.score++;
      // Aqui você implementaria o uso de áudio (Requisito Multimídia)
      // const audio = new Audio('assets/correct.mp3');
      // audio.play();
    } else {
      // const audio = new Audio('assets/incorrect.mp3');
      // audio.play();
    }
  }

  // Função para avançar para a próxima pergunta
  nextQuestion() {
    this.answerSelected = false;
    this.selectedAnswerIndex = null;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizFinished = true; // Termina o Quiz
      this.saveResult();
    }
  }

  // Persiste o resultado do quiz no localStorage para histórico simples
  saveResult() {
    try {
      const key = 'quizHistory';
      const raw = localStorage.getItem(key);
      const history = raw ? JSON.parse(raw) : [];
      history.push({ score: this.score, total: this.questions.length, date: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(history));
    } catch (e) {
      console.warn('Não foi possível salvar o histórico do quiz', e);
    }
  }
  goToHome() {
    this.router.navigate(['../tabs/tab1']); // Assumindo que a próxima tela é '/home'
  }
}