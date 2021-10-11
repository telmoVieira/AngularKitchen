import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] 
  
  constructor(private recipeService: RecipeService) {
   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
