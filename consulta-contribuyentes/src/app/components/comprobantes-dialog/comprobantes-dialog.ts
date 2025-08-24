import { Component,Inject } from '@angular/core';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

export interface Comprobante{
  contribuyente: string,
  ncf:string,
  monto: number,
  itbiS18:number
}

export interface DialogData{
  comprobantes: Comprobante[];
  sumaITBIS:  number
}


@Component({
  selector: 'app-comprobantes-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,MatTableModule, CommonModule],
  templateUrl: './comprobantes-dialog.html',
  styleUrls: ['./comprobantes-dialog.css']
})
export class ComprobantesDialog {
  
  constructor(
    public dialogRef: MatDialogRef<ComprobantesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  cerrar(): void{
    this.dialogRef.close();
  }
}
