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
    if (!this.isAdd) {
      console.log("isAdddd" , this.isAdd) ;
    } else {
      this.item = new Ingredient(ingredient.name , ingredient.amount) ;
      console.log("item:" , this.item) ;
      this.sls.addItem(this.item) ;
    }
  }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null){
      this.isAdd = true ;
    } else {
      this.isAdd = false
    }
  }
}
