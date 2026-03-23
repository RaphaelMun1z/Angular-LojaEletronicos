import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-brand-showcase',
  imports: [CommonModule, AppIcon],
  templateUrl: './brand-showcase.html',
  styleUrl: './brand-showcase.css',
})
export class BrandShowcase {
  brands = ['Bosch', 'Cofap', 'Monroe', 'NGK', 'Delphi', 'Philips', 'Valeo', 'Heliar'];

  benefits = [
    {
      title: 'Reposicao confiavel',
      text: 'Selecao de marcas reconhecidas por oficinas e centros automotivos.',
      icon: 'badge-check',
    },
    {
      title: 'Giro comercial forte',
      text: 'Home mais longa e informativa para valorizar categorias com alta demanda.',
      icon: 'gauge',
    },
    {
      title: 'Experiencia mais util',
      text: 'Conteudo de apoio, FAQ e orientacao de compra para melhorar permanencia.',
      icon: 'clipboard-list',
    },
  ];

  serviceStrip = [
    {
      title: 'Diagnostico tecnico',
      text: 'Leitura visual mais forte para manutencao, revisao e busca guiada.',
      icon: 'clipboard-list',
      tone: 'light',
    },
    {
      title: 'Repair & service',
      text: 'Bloco central mais vibrante, inspirado nas faixas de servico dos templates.',
      icon: 'wrench',
      tone: 'accent',
    },
    {
      title: 'Entrega ao cliente',
      text: 'Jornada mais premium, com foco em confianca e acabamento visual.',
      icon: 'car-front',
      tone: 'dark',
    },
  ];
}
