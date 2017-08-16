import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "./shopping-list.service";
import {tryCatch} from "rxjs/util/tryCatch";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  @Input() item: Ingredient ;
  @Output() cleared = new EventEmitter();
  isAdd = true ;




  constructor(private sls: ShoppingListService) {
  }



  onSubmit(ingredient: Ingredient) {
    const  newIngredient =new Ingredient(ingredient.name , ingredient.amount)
    if (!this.isAdd) {
      this.sls.editItem(this.item , newIngredient) ;
      this.onClear();
      console.log("isAdddd" , this.isAdd) ;
    } else {
      this.item = newIngredient ;
      console.log("item:" , this.item) ;
      this.sls.addItem(this.item) ;
    }
  }

  ngOnChanges(changes) {
    console.log("changess"  , changes.item)
    if(changes.item.currentValue === null){
      this.isAdd = true ;
      this.item = {name : null , amount: null} ;
      console.log("changee:" , this.isAdd)
    } else {
      this.isAdd = false;
      console.log("changee:" , this.isAdd)
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item) ;
    this.onClear();
  }

  onClear() {
    this.isAdd = true ;
    this.cleared.emit(null) ;
  }
}
