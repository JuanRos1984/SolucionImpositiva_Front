import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contribuyente } from '../../services/contribuyente';
import { Comprobantes } from '../../services/comprobantes';

@Component({
  selector: 'app-contribuyentes-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribuyentes-view.html',
  styleUrl: './contribuyentes-view.css',
})
export class ContribuyentesView {
  dataContribuyentes: any[] = [];
  dataComprobantes: any[] = [];
  mostrarModal: boolean = false;
  sumaITBIS: number = 0;

  constructor(
    private contribuyenteService: Contribuyente,
    private comprobantesService: Comprobantes
  ) {}

  ngOnInit() {
    this.contribuyenteService.getContribuyentes().subscribe({
      next: (res) => (this.dataContribuyentes = res),
      error: (err) => console.error('ERROR AL CARGAR LOS DATOS: ', err),
    });
  }

  verComprobantes(rnc: string): void {
    console.log('RNC CEDULA: ', rnc);
    this.comprobantesService.getComprobantes(rnc).subscribe({
      next: (res) => {
        this.dataComprobantes = res.comprobantes;
        console.log('COMPROBANTES: ', this.dataComprobantes);
        this.sumaITBIS = res.sumaITBIS;
        this.mostrarModal = true;
      },
      error: (err) => console.error('ERROR AL CARGAR LOS COMPROBANTES: ', err),
    });
  }
  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
