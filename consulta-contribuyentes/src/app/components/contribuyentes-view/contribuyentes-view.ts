import { Component, OnInit } from '@angular/core';
import { Contribuyente } from '../../services/contribuyente';
import { Comprobantes } from '../../services/comprobantes';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { ComprobantesDialog } from '../comprobantes-dialog/comprobantes-dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contribuyentes-view',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatTableModule],
  templateUrl: './contribuyentes-view.html',
  styleUrls: ['./contribuyentes-view.css'],
})

export class ContribuyentesView {
  dataContribuyentes: any[] = [];
  dataComprobantes: any[] = [];
  mostrarModal: boolean = false;
  sumaITBIS: number = 0;

  constructor(
    private contribuyenteService: Contribuyente,
    private comprobantesService: Comprobantes,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.contribuyenteService.getContribuyentes().subscribe({
      next: (res) => (this.dataContribuyentes = res),
      error: (err) => console.error('ERROR AL CARGAR LOS DATOS: ', err),
    });
  }

  verComprobantes(rnc: string): void {
    this.comprobantesService.getComprobantes(rnc).subscribe({
      next: (res) => {
        this.dataComprobantes = res.comprobantes;
        this.sumaITBIS = res.sumaITBIS;

        this.dialog.open(ComprobantesDialog,{
          width: '80vw',      
          maxWidth: '800px',  
          height: '70vh',     
          maxHeight: '600px', 
          data:{
            comprobantes: this.dataComprobantes,
            sumaITBIS: this.sumaITBIS
          },
        });
      },
      error: (err) => {
        Swal.fire({
            icon:'warning',
            title: '',
            text: `${err.error}`,
            confirmButtonText: 'Aceptar'
          });
      },
    });
  }
  cerrarModal(): void {
    this.mostrarModal = false;
  }
}
