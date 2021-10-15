import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] 
  
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
     }
}
