import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';
import { DEPARTMENTS } from '../../models/general/general.models';

@Component({
  selector: 'app-header',
  imports: [AppIcon, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  departments = DEPARTMENTS;
}
