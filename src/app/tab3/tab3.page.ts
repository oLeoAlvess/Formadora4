import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonButton, IonCardContent, } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { QuizService, Question } from '../services/quiz.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonButton, IonCardContent],
  standalone: true,
})
export class Tab3Page {
  constructor(private router: Router, private quizService: QuizService) {
    this.loadQuestions();
  }
  
  // Perguntas serão carregadas a partir do QuizService

  // Versão das perguntas com opções embaralhadas (mantém o índice da resposta correta atualizado)
  shuffledQuestions: Question[] = [];
  totalQuestions: number = 0;

  // Variáveis de Estado do Quiz
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedAnswerIndex: number | null = null;
  answerSelected: boolean = false;
  isCorrect: boolean = false;
  quizFinished: boolean = false;
  // Nota/resultados do quiz
  gradeTitle: string | null = null;
  gradeMessage: string | null = null;

  get currentQuestion(): Question {
    return this.shuffledQuestions[this.currentQuestionIndex];
  }
  private loadQuestions() {
    this.shuffledQuestions = this.quizService.getShuffledQuestions();
    this.totalQuestions = this.shuffledQuestions.length;
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

    const total = this.totalQuestions || (this.shuffledQuestions && this.shuffledQuestions.length) || 0;
    if (this.currentQuestionIndex < total - 1) {
      this.currentQuestionIndex++;
    } else {
      this.quizFinished = true; // Termina o Quiz
      this.computeGrade();
      this.saveResult();
    }
  }

  // Calcula a nota do quiz em 3 níveis e prepara mensagem para o usuário
  computeGrade() {
  const total = this.totalQuestions || (this.shuffledQuestions && this.shuffledQuestions.length) || 0;
    const score = this.score;

    // Regras: acerto total => nível mais alto; caso contrário, >=60% => mediano; abaixo disso => precisa melhorar
    if (score === total) {
      this.gradeTitle = 'Excelente!';
      this.gradeMessage = 'Você acertou todas as questões — você aprendeu bastante sobre segurança digital.';
    } else if (score >= Math.ceil(total * 0.6)) {
      this.gradeTitle = 'Bom, mas pode melhorar';
      this.gradeMessage = 'Você está indo bem, porém ainda há pontos a reforçar. Continue estudando.';
    } else {
      this.gradeTitle = 'Precisa Melhorar';
      this.gradeMessage = 'Recomendamos revisar os conteúdos e praticar mais para melhorar sua proteção online.';
    }
  }

  // Persiste o resultado do quiz no localStorage para histórico simples
  saveResult() {
    try {
      const key = 'quizHistory';
      const raw = localStorage.getItem(key);
      const history = raw ? JSON.parse(raw) : [];
      const total = this.totalQuestions || (this.shuffledQuestions && this.shuffledQuestions.length) || 0;
      history.push({ score: this.score, total, date: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(history));
    } catch (e) {
      console.warn('Não foi possível salvar o histórico do quiz', e);
    }
  }
  goToHome() {
    this.router.navigate(['../tabs/tab1']); // Assumindo que a próxima tela é '/home'
  }

  // Reinicia o quiz: reseta estados e reembaralha as opções
  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedAnswerIndex = null;
    this.answerSelected = false;
    this.isCorrect = false;
    this.quizFinished = false;
    this.gradeTitle = null;
    this.gradeMessage = null;
    // Reembaralha as opções para cada pergunta
    this.loadQuestions();
  }
}