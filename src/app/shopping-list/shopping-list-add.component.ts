import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item: Ingredient ;
  isAdd = true ;




  constructor(private sls: ShoppingListService) {
  }



  onSubmit(ingredient: Ingredient) {
    const  newIngredient =new Ingredient(ingredient.name , ingredient.amount)
    if (this.isAdd) {
      this.sls.editItem(this.item , newIngredient) ;
      console.log("isAdddd" , this.isAdd) ;
    } else {
      this.item = newIngredient ;
      console.log("item:" , this.item) ;
      this.sls.addItem(this.item) ;
    }
  }

  ngOnChanges(changes) {
    console.log("changess"  , changes.item)
    if(changes.item.currentValue == null){
      this.isAdd = false ;
      this.item = {name : null , amount: null} ;
      console.log("changee:" , this.isAdd)
    } else {
      this.isAdd = true;
      console.log("changee:" , this.isAdd)
    }
  }
}
