import { Component, OnChanges } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  rating: number = 4;
  starWidth: number =5;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;

  } 
}
