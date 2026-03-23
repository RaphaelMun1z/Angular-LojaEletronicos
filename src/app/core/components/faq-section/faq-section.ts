import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-faq-section',
  imports: [CommonModule, AppIcon],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css',
})
export class FaqSection {
  faqs = [
    {
      question: 'Como encontrar a autopeca correta para meu veiculo?',
      answer:
        'Recomendamos validar montadora, modelo, ano, motorizacao e, quando possivel, o codigo original da peca. Essa combinacao reduz erros de aplicacao e melhora a assertividade da compra.',
    },
    {
      question: 'A loja atende oficinas e clientes finais?',
      answer:
        'Sim. O catalogo foi organizado tanto para motoristas quanto para oficinas, auto centers e pequenos estoques de revenda que precisam de itens de giro e revisao.',
    },
    {
      question: 'Quais categorias costumam ter maior saida?',
      answer:
        'Filtros, freios, suspensao, palhetas, sensores, lampadas e baterias costumam ter grande demanda, por isso aparecem com destaque na home.',
    },
    {
      question: 'Por que uma home mais completa ajuda no SEO?',
      answer:
        'Mais secoes relevantes aumentam cobertura semantica, melhoram escaneabilidade, ampliam palavras-chave relacionadas e oferecem conteudo util para mecanismos de busca e visitantes.',
    },
  ];
}
