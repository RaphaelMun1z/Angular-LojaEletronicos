import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppIcon } from '../app-icon/app-icon';
import { DEPARTMENTS } from '../../models/general/general.models';

@Component({
  selector: 'app-department-grid',
  imports: [AppIcon, CommonModule],
  templateUrl: './department-grid.html',
  styleUrl: './department-grid.css',
})
export class DepartmentGrid {
  departments = DEPARTMENTS;
}
