import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';//for the routerLink directive to work both RouterLink and RouterOutlet must be imported then included in the imports array of the component decorator.
import { RouterOutlet } from '@angular/router';
//The routerLink directive enables Angular's router to create dynamic links in the application. The value assigned to the routerLink is an array with two entries: the static portion of the path and the dynamic data.
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation ! : HousingLocation;//the ! is a non-null ssertion operator which tells the typescript compiler the property is expected to be filled and can't be null
}
