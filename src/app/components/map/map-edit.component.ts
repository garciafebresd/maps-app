import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Marker {
  title: string;
  description: string;
}


@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent {

  formulary: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MapEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marker) {

    console.log(data);
    this.formulary = formBuilder.group({
      title: data.title,
      description: data.description
    });

  }

  saveChanges() {
    console.log(this.formulary.value);
    this.dialogRef.close(this.formulary.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
