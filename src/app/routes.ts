//(step-3 of routing) this is where we will define the routes for our app
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'Home Page'
    },
    {
        path:'details/:id',//the :id is dynamic and changes based on how the route is requested by the code
        component: DetailsComponent,
        title:'Home details'
    }
];
export default routeConfig;