import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rock-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() label?: string = 'Product Name';
  @Input() inlineText?: string = 'Price';

  constructor() {}

  ngOnInit(): void {}
}
