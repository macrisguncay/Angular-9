import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; //
  @Output() notify = new EventEmitter(); //allows to emit an event when the value of the notify property changes.

  constructor() { }

  ngOnInit(): void {
  }

}
