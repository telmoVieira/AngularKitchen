import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeItem',
  templateUrl: './recipeItem.component.html',
  styleUrls: ['./recipeItem.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }
}
