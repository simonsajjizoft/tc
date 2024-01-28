import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.css']
})
export class ConfirmBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmBoxComponent>) {}

  ngOnInit(): void {
  }

}
