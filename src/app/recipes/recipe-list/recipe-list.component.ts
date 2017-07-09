import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [] ;
@Output() recipeSelected = new EventEmitter<Recipe>() ;
recipeDummy = new Recipe('Dummy' , 'Dummy' , 'http://ersuk.co.uk/ekmps/shops/express2011/images/female-tailor-dummy-with-wooden-base-black-151-p.jpg') ;
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
this.recipeSelected.emit(recipe)
  }

}
