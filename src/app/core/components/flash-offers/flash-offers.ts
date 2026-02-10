import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-offers',
  imports: [AppIconComponent, ProductCardComponent, CountDownTimerComponent, CommonModule],
  templateUrl: './flash-offers.html',
  styleUrl: './flash-offers.css',
})
export class FlashOffers {

}
