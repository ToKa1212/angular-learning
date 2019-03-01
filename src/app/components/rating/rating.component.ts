import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input('rating-value') rating = 0;
  @Input() numOfReviews = 0;

  ratings = [
    {
      star: 'star_border'
    },
    {
      star: 'star_border'
    },
    {
      star: 'star_border'
    },
    {
      star: 'star_border'
    },
    {
      star: 'star_border'
    }
  ]

  onClick(ratingValue) {
    this.rating = ratingValue;
  }

  constructor() {
  }

  ngOnInit() {
    console.log(this.rating);
    this.toggleStars(this.rating - 1);
  }

  onMouseLeave(index: number) {

  }

  onMouseEnter(index: number) {
    this.toggleStars(index);
  }

  private toggleStars(index: number) {
    for (let i = 0; i <= index; i++) {
      this.ratings[i].star = 'star';
    }
    for (let i = index + 1; i < this.ratings.length; i++) {
      this.ratings[i].star = 'star_border';
    }
  }
}
