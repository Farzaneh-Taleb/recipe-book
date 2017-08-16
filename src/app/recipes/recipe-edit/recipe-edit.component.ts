import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private recipeIndex: number ;
  private subscription: Subscription

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) =>
    );
  }

}
