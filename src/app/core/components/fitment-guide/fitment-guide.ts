import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-fitment-guide',
  imports: [CommonModule, AppIcon],
  templateUrl: './fitment-guide.html',
  styleUrl: './fitment-guide.css',
})
export class FitmentGuide {
  steps = [
    {
      title: 'Informe o veiculo',
      description: 'Considere modelo, ano, motorizacao e codigo original quando houver.',
      icon: 'car-front',
    },
    {
      title: 'Compare a categoria',
      description: 'Use filtros para encontrar kits de revisao, freios, eletrica e suspensao.',
      icon: 'filter',
    },
    {
      title: 'Confirme com apoio tecnico',
      description: 'Nossa equipe pode ajudar a reduzir erros de aplicacao antes da compra.',
      icon: 'badge-check',
    },
  ];

  segments = ['Hatch', 'Sedan', 'SUV', 'Pickup', 'Utilitario', 'Frota leve'];

  checks = [
    'Validacao por modelo, motorizacao e uso do veiculo',
    'Conteudo pensado para buscas comerciais e informativas',
    'Estrutura com mais profundidade visual e melhor escaneabilidade',
  ];
}
