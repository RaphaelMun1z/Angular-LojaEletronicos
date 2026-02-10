import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-department-grid',
  imports: [AppIconComponent, CommonModule],
  templateUrl: './department-grid.html',
  styleUrl: './department-grid.css',
})
export class DepartmentGrid {}
