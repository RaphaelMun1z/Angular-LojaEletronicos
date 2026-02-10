import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-icon',
  imports: [CommonModule],
  templateUrl: './app-icon.html',
  styleUrl: './app-icon.css',
})
export class AppIcon {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() class: string = '';
}
