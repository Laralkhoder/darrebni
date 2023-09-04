import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  
  constructor(private dialogRef: MatDialogRef<DialogComponent>){ }

  
  
  closeDialog(){
    this.dialogRef.close();
  }

}