import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() public btnLabel!: string;
  @Input() public btnRoute!: string;

  constructor() {
    this.btnLabel = 'label à définir dans input';
  }

  ngOnInit(): void {}
}
