import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() viewedFilter: boolean = false;
  @Input() notViewedFilter: boolean = false;

  public filterReset: boolean = false;
  public filterViewed: boolean = false;
  public filterNotViewed: boolean = false;

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

  @Output() onChangedFilterReset = new EventEmitter<boolean>();
}
