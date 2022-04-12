import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rock-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.scss'],
})
export class ProductThumbComponent implements OnInit {
  @Input() imgSrc?: string;
  @Input() title?: string = 'Product Name';

  constructor() {}

  ngOnInit(): void {}
}
