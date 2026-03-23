import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';
import { CountDownTimer } from '../count-down-timer/count-down-timer';
import { ProductCard } from '../product-card/product-card';
import { FLASH_OFFERS } from '../../models/general/general.models';

@Component({
  selector: 'app-flash-offers',
  imports: [AppIcon, ProductCard, CountDownTimer, CommonModule],
  templateUrl: './flash-offers.html',
  styleUrl: './flash-offers.css',
})
export class FlashOffers {
  offers = FLASH_OFFERS;
}
