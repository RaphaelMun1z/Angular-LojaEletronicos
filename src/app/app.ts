import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/components/footer/footer';
import { AppIcon } from './core/components/app-icon/app-icon';
import { Header } from './core/components/header/header';
import { HeroBanner } from './core/components/hero-banner/hero-banner';
import { ProductCard } from './core/components/product-card/product-card';
import { RECOMMENDED_PRODUCTS } from './core/models/general/general.models';
import { DepartmentGrid } from "./core/components/department-grid/department-grid";
import { FlashOffers } from "./core/components/flash-offers/flash-offers";
import { ServiceHighlights } from './core/components/service-highlights/service-highlights';
import { FitmentGuide } from './core/components/fitment-guide/fitment-guide';
import { FaqSection } from './core/components/faq-section/faq-section';
import { TestimonialsShowcase } from './core/components/testimonials-showcase/testimonials-showcase';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    AppIcon,
    Header,
    HeroBanner,
    ProductCard,
    DepartmentGrid,
    FlashOffers,
    ServiceHighlights,
    FitmentGuide,
    TestimonialsShowcase,
    FaqSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('loja-eletronicos');

  recommended = RECOMMENDED_PRODUCTS;
}
