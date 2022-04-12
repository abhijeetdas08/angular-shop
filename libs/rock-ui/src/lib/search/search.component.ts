import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rock-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: Event): void {
    this.inputChange.emit(event);
  }
}
