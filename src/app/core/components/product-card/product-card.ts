import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/general/general.models';
import { AppIcon } from '../app-icon/app-icon';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, AppIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Input() isFlash: boolean = false;

  getInstallmentPrice(price: number): number {
    return (price * 1.1) / 10;
  }
}
