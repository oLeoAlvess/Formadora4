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
          <p>A Lei Geral de Proteção de Dados (LGPD), instituída pela Lei nº 13.709/2018, é o marco regulatório brasileiro que estabelece regras, princípios e deveres para o tratamento de dados pessoais em todo o território nacional. Inspirada em legislações internacionais como o GDPR europeu, a LGPD surge para garantir que indivíduos tenham mais controle sobre suas informações e para promover transparência e responsabilidade no uso desses dados por empresas, órgãos públicos e demais organizações.</p>
          <p>A LGPD define dado pessoal como qualquer informação capaz de identificar uma pessoa natural — seja diretamente, como nome e CPF, seja indiretamente, como localização, histórico de navegação ou preferências de consumo. Além disso, também protege dados pessoais sensíveis, como informações de saúde, religião, origem racial e opinião política, que exigem cuidados ainda mais rigorosos devido ao seu potencial de causar discriminação ou danos individuais.</p>
          <p>O principal objetivo da lei é proteger os direitos fundamentais de liberdade, privacidade e autodeterminação informativa, garantindo que o uso de dados seja feito de forma lícita, segura e necessária. Para isso, a LGPD estabelece princípios como finalidade, necessidade, transparência, segurança e prevenção — cada um orientando empresas e instituições a tratar informações de maneira responsável e proporcional.</p>
          <p>A lei também cria direitos inéditos para os cidadãos, como o direito de acessar seus dados, solicitar correção, portar informações para outros serviços, retirar consentimento e até pedir a eliminação de dados quando forem desnecessários. Já para as organizações, a LGPD impõe a obrigação de adotar medidas técnicas e administrativas para proteger os dados, comunicar incidentes de segurança e manter práticas de governança que assegurem a conformidade.</p>
          <p>Por fim, a Autoridade Nacional de Proteção de Dados (ANPD) foi instituída como o órgão responsável por fiscalizar, orientar e aplicar sanções em caso de descumprimento da lei. As penalidades vão desde advertências até multas que podem alcançar R$ 50 milhões por infração, além de bloqueio ou eliminação de dados.</p>
          <p>Em resumo, a LGPD representa um avanço significativo na proteção da privacidade no Brasil. Ela estabelece um equilíbrio essencial entre inovação e segurança, conferindo aos cidadãos maior poder sobre suas informações e incentivando as organizações a adotarem práticas mais éticas, transparentes e seguras no tratamento de dados pessoais.</p>
        `,
      },
      direitos: {
        title: 'Seus Direitos Digitais',
        content: `
          <h4>Seus Direitos Digitais</h4>
          <p>Os direitos digitais garantem proteção, privacidade, liberdade e segurança para todos que utilizam a internet. Eles são essenciais em um mundo onde quase tudo envolve dados — desde redes sociais até bancos e aplicativos.</p>

          <ol>
            <li>
            <strong>Direito à privacidade</strong> <p>— A privacidade digital significa que o usuário tem controle sobre aquilo que compartilha e sobre como suas informações são tratadas.</p>
            <p>Explicando mais:</p>
            <p> - Esse direito assegura que seus dados não podem ser coletados, usados ou vendidos sem que você saiba.</p>
            <p> - Empresas devem pedir permissão clara (consentimento).</p>
            <p> - Você também pode optar por não fornecer certos dados, sem ser prejudicado injustamente.</p>
            <p> - A privacidade impede rastreamentos indevidos e monitoramento abusivo.</p>
            <p> - Na prática, garante que você tenha intimidade e anonimato, se desejar.</p>
            </li>

            <li>
            <strong> Direito à Proteção de Dados Pessoais</strong> <p>— Esse direito garante que seus dados sejam mantidos seguros, organizados e protegidos contra uso indevido.</p>
            <p>Entendendo melhor:</p>
            <p> - Você pode solicitar acesso ao que uma empresa sabe sobre você.</p>
            <p> - Pode pedir correção de informações erradas.</p>
            <p> - Pode exigir que a empresa apague seus dados quando eles não forem mais necessários.</p>
            <p> - É possível mudar de ideia e retirar o consentimento.</p>
            <p>A LGPD define regras rígidas para obrigar empresas a cuidarem desses dados com responsabilidade, aplicando medidas como criptografia, limitação de acesso e auditorias.</p>
            </li>

            <li>
            <strong>Direito à Liberdade de Expressão</strong> <p>— Na internet, você tem o direito de se expressar, opinar e compartilhar informações.</p>
            <p>Mas com limites importantes:</p>
            <p> - Não protege discursos de ódio, difamação ou ameaças.</p>
            <p> - Plataformas podem remover conteúdos que violem regras, mas não podem censurar opiniões legítimas.</p>
            <p> - O Marco Civil assegura que o governo não pode restringir opiniões arbitrariamente.</p>
            <p>O Marco Civil assegura que o governo não pode restringir opiniões arbitrariamente.</p>
            </li>

            <li>
            <strong>Direito à Segurança Digital</strong> <p>— O direito à segurança significa que usuários devem navegar em ambientes digitais que reduzam ao máximo riscos como fraudes, invasões e vazamentos.</p>
            <p>Aprofundando:</p>
            <p> - Empresas precisam implementar mecanismos de segurança (como firewall, 2FA e criptografia).</p>
            <p> - Elas também devem comunicar imediatamente incidentes de vazamento.</p>
            <p> - O usuário tem o direito de ser protegido contra golpes e práticas maliciosas.</p>
            <p> - Políticas de segurança precisam ser claras e acessíveis.</p>
            <p>Esse direito visa impedir que você seja exposto a riscos que poderiam ser evitados com boas práticas tecnológicas.</p>
            </li>

            <li>
            <strong>Direito ao Acesso à Informação e à Inclusão Digital</strong> <p>— A internet deve ser acessível e livre para todos.</p>
            <p>Significa que:</p>
            <p> - Pessoas devem ter acesso democrático à internet, sem discriminação.</p>
            <p> - Conteúdos devem ser claros, compreensíveis e acessíveis (inclusive para pessoas com deficiência).</p>
            <p> - A neutralidade da rede deve ser respeitada: provedores não podem bloquear sites ou favorecê-los.</p>
            <p> - Informações públicas devem ser divulgadas de forma transparente.</p>
            <p>Esse direito garante que a internet funcione como ferramenta de conhecimento e igualdade.</p>
            </li>

            <li>
            <strong>Direito à Transparência</strong> <p>— Os usuários têm o direito de saber:</p>
            <p> - Por que seus dados estão sendo coletados</p>
            <p> - Como serão usados</p>
            <p> - Com quem serão compartilhados</p>
            <p> - Por quanto tempo ficarão armazenados</p>
            <p> - Quais riscos existem</p>
            <p>Explicando melhor:</p>
            <p>Transparência evita “pegadinhas” em políticas de privacidade, impede que empresas escondam práticas questionáveis e aumenta a confiança entre usuário e empresa.</p>
            <p>Tudo deve ser informado de forma simples, e não com textos difíceis cheios de termos jurídicos.</p>
            </li>

            <li>
            <strong>Direito ao Esquecimento</strong> <p>— O direito ao esquecimento permite que uma pessoa solicite a remoção de conteúdos antigos que:</p>
            <p> - Não têm mais relevância pública.</p>
            <p> - Prejudicam injustamente a pessoa.</p>
            <p> - Não fazem parte da história atual dela.</p>
            <p>Mas há um ponto importante:</p>
            <p>Esse direito é aplicado com cautela no Brasil para evitar censura. Ele costuma ser considerado em situações onde o conteúdo traz prejuízo desproporcional à vida da pessoa e não tem mais utilidade pública.</p>
            </li>




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
