import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';//this is the housing location component import
import { HousingLocation } from '../housinglocation';//this is the interface import which allows for strong typing
@Component({
  selector: 'app-home',//how other components can render it in their templates as custom made tags
  standalone: true,//self contained and not dependent on other components if this is set to true
  imports: [CommonModule, HousingLocationComponent],//as written in the import statements above and in the later line where the selector of the child component is used for rendering it, the attribute definition in it is [child's property]=[parent's property]
  template: `
  <section>
    <form>
      <input type="text" placeholder="filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section>
  <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  filterResults(text: string) {//this accepts the argument from the value of the template reference variable for the purpose of filtering.
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())//the filter method filters the list and returns the object/ts where the city prop value , made case insensitive by the toLowerCase() method, is the same as the text provided or "includes" it by the method includes
    );
  }
  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[])=>{//"then()" is used to be timed with the fulfillment of the promise from the definition of the service method
      this.housingLocationList=housingLocationList;//the one on the right side is the one fetched by the promise/then indication
    });//constructor is the first thing that runs when this component is created.
    //this.filteredLocationList = this.housingLocationList;//the filteredLocationList should contain the total set of housing locations by default.
  }

}