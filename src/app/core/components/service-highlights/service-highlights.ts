import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-service-highlights',
  imports: [CommonModule, AppIcon],
  templateUrl: './service-highlights.html',
  styleUrl: './service-highlights.css',
})
export class ServiceHighlights {
  pillars = [
    {
      title: 'Reposicao de pecas',
      description: 'Linhas de revisao, motor e freio organizadas para compra tecnica.',
      icon: 'package-check',
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: 'Colisao e reparo',
      description: 'Componentes de funilaria, iluminacao e acabamento com perfil premium.',
      icon: 'wrench',
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: 'Tuning e performance',
      description: 'Selecao pensada para visual mais agressivo e melhor dirigibilidade.',
      icon: 'gauge',
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: 'Estetica e cuidado',
      description: 'Palhetas, lampadas e itens de acabamento para valorizar a entrega final.',
      icon: 'lightbulb',
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    },
  ];

  stats = [
    { label: 'pecas em destaque', value: '+2.500' },
    { label: 'marcas parceiras', value: '40+' },
    { label: 'entregas monitoradas', value: '24/7' },
    { label: 'suporte especializado', value: 'Seg a Sab' },
  ];
}
