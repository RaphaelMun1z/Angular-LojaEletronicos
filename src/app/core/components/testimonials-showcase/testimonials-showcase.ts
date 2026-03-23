import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-testimonials-showcase',
  imports: [CommonModule, AppIcon],
  templateUrl: './testimonials-showcase.html',
  styleUrl: './testimonials-showcase.css',
})
export class TestimonialsShowcase {
  testimonials = [
    {
      name: 'Rafael Martins',
      role: 'Cliente oficina parceira',
      text: 'A organizacao das categorias ficou muito mais clara. Encontramos filtros, sensores e kits de revisao mais rapido e com visual muito mais premium.',
    },
    {
      name: 'Juliana Costa',
      role: 'Compradora de auto center',
      text: 'A home transmite mais confianca. Os blocos com imagem, depoimentos e servicos deixam a navegacao menos generica e mais profissional.',
    },
    {
      name: 'Eduardo Lima',
      role: 'Gestor de loja',
      text: 'O novo layout ajuda na leitura e na percepcao de valor. Para uma loja de autopecas, esse clima de oficina e performance faz toda diferenca.',
    },
  ];
}
