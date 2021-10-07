import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Arroz de Pato', 'A melhor receita de arroz de pato esta aqui', 
    'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/101C5A5D-C290-4A58-B372-A0100BC48778/Derivates/1FAC3616-88EB-4B3F-B68A-7B0CB5DAF2C9.jpg'),
    new Recipe('Sopa de Cação', 'As Melhores receitas de casa', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3ac6RrNth8XD-F1qFIjs9ZkIbnKPlhb6hw&usqp=CAU')  
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
