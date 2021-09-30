import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
