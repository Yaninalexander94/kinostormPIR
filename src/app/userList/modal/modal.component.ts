import { Component, EventEmitter, Output } from '@angular/core';
import {ApiComponent} from '../api/api.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ApiComponent]
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>()
  constructor(private service: ApiComponent){}


  resetFilter():void {
   this.service.filterReset();
  }
  viewedFilter():void {
    this.service.filterViewedToggle();
  }
  notViewedFilter():void {
    this.service.filterNotViewedToggle();
  }

}
