import { Injectable } from '@angular/core';

export interface Question {
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // Perguntas-fonte (autoritativas) — mantenha aqui o conteúdo do quiz
  private questions: Question[] = [
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
    },
    {
      text: 'O que é engenharia social?',
      options: ['Um tipo de firewall', 'Técnicas que exploram comportamento humano para obter informação/confiança', 'Um protocolo de rede'],
      correctAnswerIndex: 1,
    },
    {
      text: 'Qual é a melhor prática ao criar senhas?',
      options: ['Usar senhas curtas e fáceis de lembrar', 'Reutilizar a mesma senha em vários serviços', 'Criar senhas longas e únicas e usar um gerenciador de senhas'],
      correctAnswerIndex: 2,
    },
    {
      text: 'O que faz uma VPN (Rede Privada Virtual)?',
      options: ['Aumenta a velocidade da internet', 'Criptografa o tráfego e oculta o endereço IP, criando um canal seguro', 'Bloqueia anúncios automaticamente'],
      correctAnswerIndex: 1,
    },
    {
      text: 'Ao receber um e-mail suspeito com link, o que você deve fazer?',
      options: ['Clicar no link para verificar', 'Responder pedindo confirmação', 'Não clicar e reportar/marcar como phishing'],
      correctAnswerIndex: 2,
    },
    {
      text: 'O que é autenticação de dois fatores (2FA)?',
      options: ['Uso de duas senhas diferentes', 'Um segundo método de verificação além da senha, como SMS ou app de autenticação', 'Compartilhar a senha com um colega'],
      correctAnswerIndex: 1,
    },
    {
      text: 'O que é malware?',
      options: ['Um hardware danificado', 'Software malicioso projetado para causar danos ou roubar informação', 'Um tipo de cabo de rede'],
      correctAnswerIndex: 1,
    },
    {
      text: 'Qual prática reduz risco em redes Wi‑Fi públicas?',
      options: ['Conectar automaticamente e desativar firewall', 'Evitar transações sensíveis e usar VPN', 'Compartilhar arquivos sem senha'],
      correctAnswerIndex: 1,
    }
  ];

  // Fisher-Yates
  private shuffleArray<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Retorna uma cópia das perguntas com a ordem das perguntas e das opções embaralhadas
  getShuffledQuestions(): Question[] {
    // Copia profunda básica das perguntas
    const questionsCopy = this.questions.map(q => ({ text: q.text, options: q.options.slice(), correctAnswerIndex: q.correctAnswerIndex }));

    // Embaralha a ordem das perguntas
    const questionsShuffledOrder = this.shuffleArray(questionsCopy);

    // Embaralha as opções de cada pergunta e recalcula índice correto
    return questionsShuffledOrder.map(q => {
      const shuffledOptions = this.shuffleArray(q.options.slice());
      const correctText = q.options[q.correctAnswerIndex];
      const newIndex = shuffledOptions.indexOf(correctText);
      return {
        text: q.text,
        options: shuffledOptions,
        correctAnswerIndex: newIndex >= 0 ? newIndex : 0,
      } as Question;
    });
  }

  // Opcional: expõe número total de perguntas
  getTotalQuestions(): number {
    return this.questions.length;
  }
}
