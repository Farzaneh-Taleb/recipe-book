import { RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
 const APP_ROUTES_PROVIDER =[


    { path:'' , redirectTo:'/recipes' ,pathMatch : 'full'} ,
    { path:'recipes' , component: RecipesComponent } ,
    { path:'shopping-list' , component: ShoppingListComponent }

]
export const routing = RouterModule.forRoot(APP_ROUTES_PROVIDER) ;
