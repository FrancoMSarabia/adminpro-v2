import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  @Input() progress: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  get getPercent(): String {
    return `${this.progress}%`;
  }

  changeValue(number: number) {
    this.progress += number;

    if (this.progress < 0)
      this.progress = 0;

    if (this.progress > 100)
      this.progress = 100;
  }

}
