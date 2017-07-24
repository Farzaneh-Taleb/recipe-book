import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

 @Input() selectedRecipe: Recipe ;
 private recipeIndex: number =1;


  constructor( private sls: ShoppingListService , private router: Router) { }

  ngOnInit() {
  }

  onDelete() {
    this.router.navigate(['/recipes' , this.recipeIndex , 'edit']);

  }
   onEdit(){
     this.router.navigate(['/recipes' , this.recipeIndex , 'edit']);

   }


  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients) ;
  }
}
