import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-character-selection-dialog',
  templateUrl: './character-selection-dialog.component.html',
  styleUrls: ['./character-selection-dialog.component.scss']
})
export class CharacterSelectionDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  imageLocations: string[];

  constructor(
    // private fb: FormBuilder,
    // private dialogRef: MatDialogRef<CharacterSelectionDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) data
    ) {

    // this.description = data.description;
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   description: [this.description, []]
    //     });
  }

  fillImageLocations() {
    // TODO image service
  }

  save() {
    // this.dialogRef.close(this.form.value);
  }

  close() {
   // this.dialogRef.close();
  }
}
