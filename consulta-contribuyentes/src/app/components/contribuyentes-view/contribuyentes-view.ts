import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contribuyente } from '../../services/contribuyente';

@Component({
  selector: 'app-contribuyentes-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribuyentes-view.html',
  styleUrl: './contribuyentes-view.css',
})
export class ContribuyentesView {
  data: any[] = [];

  constructor(private contribuyenteService: Contribuyente) {}

  ngOnInit() {
    this.contribuyenteService.getContribuyentes().subscribe({
      next: (res) => (this.data = res),
      error: (err) => console.error('ERROR AL CARGAR LOS DATOS: ', err),
    });
  }
}
