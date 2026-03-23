import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-hero-banner',
  imports: [AppIcon],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  hotspots = [
    {
      name: 'Farol e iluminacao',
      cta: 'Ver pecas de iluminacao',
      href: '#',
      top: '31%',
      left: '22%',
    },
    {
      name: 'Suspensao dianteira',
      cta: 'Ver amortecedores',
      href: '#',
      top: '59%',
      left: '33%',
    },
    {
      name: 'Portas e acabamento',
      cta: 'Ver acabamentos',
      href: '#',
      top: '42%',
      left: '58%',
    },
    {
      name: 'Lanterna traseira',
      cta: 'Ver lanternas',
      href: '#',
      top: '28%',
      left: '80%',
    },
    {
      name: 'Rodas e freios',
      cta: 'Ver pneus e freios',
      href: '#',
      top: '68%',
      left: '86%',
    },
    {
      name: 'Saia e acabamento inferior',
      cta: 'Ver kits externos',
      href: '#',
      top: '82%',
      left: '50%',
    },
  ];
}
