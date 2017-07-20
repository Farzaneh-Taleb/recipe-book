import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

@Output() recipeSelected = new EventEmitter<Recipe>() ;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes() ;
  }

  onSelected(recipe: Recipe) {
    console.log('cliiiiiik');
    console.log(recipe);
this.recipeSelected.emit(recipe);
  }

}
