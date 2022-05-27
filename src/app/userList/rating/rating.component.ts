import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'rating-app',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})

export class RatingComponent {
  @Output() onChangedRating = new EventEmitter<number>();
  setRating(rating: number){
    this.onChangedRating.emit(rating);
  }
}
