import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  // @Output() close = new EventEmitter<void>()
  public filterReset: boolean = false;
  public filterViewed: boolean = false;
  public filterNotViewed: boolean = false;

  @Output() onChangedFilterReset = new EventEmitter<boolean>();
  setFilterReset() {
    this.onChangedFilterReset.emit(this.filterReset = true);
  }

  @Output() onChangedFilterViewed = new EventEmitter<boolean>();
  setFilterViewed() {
    this.onChangedFilterViewed.emit(this.filterViewed = true);
  }

  @Output() onChangedFilterNotViewed = new EventEmitter<boolean>();
  setFilterNotViewed() {
    this.onChangedFilterNotViewed.emit(this.filterNotViewed = true);
  }
}
