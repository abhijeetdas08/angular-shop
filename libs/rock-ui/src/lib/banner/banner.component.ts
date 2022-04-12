import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'rock-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [1055, 194, 368].map(
    (n) =>
      `https://placehold.jp/30/dd6699/dd6699/1024x90.png?text=placeholder+image`
  );
}
