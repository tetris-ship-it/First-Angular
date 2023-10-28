/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';//(step-1 of routing) gotta add this and provideRouter for our app to use routing because this is the main-typescript file. We define routeConfig which defines the routes in a later step in the "routes.ts" file.


bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)]})//(step-2 of routing) update this to include the provideRouter(routeConfig) method so there can be routing in our app
  .catch(err => console.error(err));
