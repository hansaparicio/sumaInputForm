import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css'],
})
export class SumarComponent implements OnInit {
  formArray = new FormArray([]);
  rows: Array<{ name: string, control: FormControl}> = [];
  total: number = 0;
  constructor() { }

  add() {
    const newControl = new FormControl(0);
    this.formArray.push(newControl);
    this.rows.push({ name: `Cantidad ${this.formArray.length}`, control: newControl })
  }

  ngOnInit(): void {
    this.updateTotalByRowsChanges();
  }

  private updateTotalByRowsChanges() {
    this.formArray.valueChanges
      .subscribe((values: number[]) => this.total =
        values.reduce((previousValue, currentValue) => (currentValue + previousValue), 0));
  }
}
