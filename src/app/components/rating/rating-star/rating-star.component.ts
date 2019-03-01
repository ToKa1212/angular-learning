import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {

  @Input('star') starType: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    // fromEvent(this.el, 'mouseEnter').subscribe(
    //   event => {
    //     this.starType = 'star';
    //   }
    // )
  }

}
