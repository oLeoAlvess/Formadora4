import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class TopicModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private titleSubject = new BehaviorSubject<string>('');
  private contentSubject = new BehaviorSubject<string>('');

  readonly isOpen$ = this.isOpenSubject.asObservable();
  readonly title$ = this.titleSubject.asObservable();
  readonly content$ = this.contentSubject.asObservable();

  
  // Retorna o conteúdo de um tópico sem alterar o estado do modal.
  getTopic(topic: 'lgpd' | 'direitos' | 'dicas') {
    const topics: Record<string, { title: string; content: string }> = {
      lgpd: {
        title: 'O que é a LGPD?',
        content: `
          <h4>O que é a LGPD?</h4>
          <p>A Lei Geral de Proteção de Dados (LGPD) regula a coleta, uso, armazenamento e tratamento de dados pessoais no Brasil. Seu objetivo é proteger a privacidade e os direitos dos titulares, exigindo transparência e segurança por parte de empresas e organizações.</p>

          <h5>Principais pontos</h5>
          <ul>
            <li>Define regras sobre coleta, armazenamento, compartilhamento e exclusão de dados.</li>
            <li>Garante direitos aos titulares (acesso, correção, exclusão, portabilidade).</li>
            <li>Exige medidas de segurança e responsabilidade no tratamento de dados.</li>
          </ul>

          <p>Em resumo, a LGPD busca evitar abusos e promover um tratamento responsável e transparente das informações pessoais.</p>
        `,
      },
      direitos: {
        title: 'Seus Direitos Digitais',
        content: `
          <h4>Seus Direitos Digitais</h4>
          <p>Os direitos digitais estendem direitos fundamentais ao ambiente online, garantindo uso seguro, livre e transparente das tecnologias.</p>

          <ol>
            <li><strong>Direito à privacidade</strong> — manter seus dados pessoais protegidos; uso apenas com autorização ou explicação clara.</li>
            <li><strong>Direito à proteção de dados</strong> — tratamento seguro, prevenção de vazamentos e uso indevido.</li>
            <li><strong>Direito ao acesso à informação</strong> — entender como serviços e plataformas tratam dados e tomar decisões informadas.</li>
            <li><strong>Direito à liberdade de expressão</strong> — manifestar-se sem censura injustificada, respeitando leis e direitos alheios.</li>
            <li><strong>Direito de exclusão</strong> (direito ao esquecimento) — em determinados casos, solicitar remoção de conteúdos prejudiciais ou incorretos.</li>
            <li><strong>Direito à segurança digital</strong> — navegação em ambientes protegidos contra fraudes e ataques.</li>
            <li><strong>Direito ao acesso à internet</strong> — acesso considerado essencial para cidadania e educação.</li>
            <li><strong>Neutralidade da rede</strong> — tratamento igualitário de dados na internet.</li>
            <li><strong>Direito à transparência</strong> — saber como plataformas usam seus dados e operam algoritmos.</li>
            <li><strong>Portabilidade de dados</strong> — transferir seus dados entre serviços quando necessário.</li>
          </ol>

          <p>Esses direitos ajudam você a manter controle sobre suas informações e a exigir práticas responsáveis das empresas.</p>
        `,
      },
      dicas: {
        title: 'Dicas de Segurança Prática',
        content: `
          <h4>Dicas de Segurança Prática</h4>
          <ol>
            <li><strong>Use senhas fortes</strong><br/>Combine maiúsculas, minúsculas, números e símbolos. Não reutilize senhas. Considere usar um gerenciador de senhas (Bitwarden, KeePass).</li>
            <li><strong>Ative a autenticação em duas etapas (2FA)</strong><br/>Use SMS, app autenticador ou chave física para adicionar uma camada extra de segurança.</li>
            <li><strong>Cuidado com links e mensagens suspeitas</strong><br/>Não clique em links de remetentes desconhecidos e verifique sempre o endereço do site antes de informar dados.</li>
            <li><strong>Proteja seus dados pessoais</strong><br/>Evite compartilhar CPF, RG, dados bancários e informações sensíveis em redes sociais ou sites não confiáveis.</li>
            <li><strong>Mantenha dispositivos atualizados</strong><br/>Atualize sistema operacional, navegador e aplicativos para receber correções de segurança.</li>
            <li><strong>Use conexões seguras</strong><br/>Evite Wi‑Fi público para transações sensíveis. Prefira redes confiáveis ou use VPN.</li>
            <li><strong>Revise permissões de aplicativos</strong><br/>Limite acessos a câmera, microfone e localização quando não necessários.</li>
            <li><strong>Instale apenas apps confiáveis</strong><br/>Baixe de lojas oficiais (Google Play, App Store) e evite APKs ou softwares piratas.</li>
            <li><strong>Cuidado com instalações no PC</strong><br/>Baixe programas apenas de sites oficiais e evite cracks e instaladores desconhecidos.</li>
            <li><strong>Faça backup regularmente</strong><br/>Mantenha cópias em nuvem ou em disco externo para evitar perda de dados.</li>
          </ol>

          <p>Aplicando essas práticas, você reduz muito o risco de incidentes e mantém seus dados mais seguros.</p>
        `,
      },
    };

    return topics[topic];
  }

  close() {
    this.isOpenSubject.next(false);
  }
}
