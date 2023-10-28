import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';//(step-4 of routing) import the module then <route-outlet> is a placeholder that is dynamically filled based on the URL-component content matching
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent, RouterModule ],
  template: `<main>
    <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="./assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
