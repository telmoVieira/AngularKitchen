import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
  styleUrls: ['./recipeList.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Receitas do Telmo', 'As Melhores receitas de casa', 'https://thumbs.dreamstime.com/b/cozinheiro-chefe-holding-dos-desenhos-animados-um-livro-da-receita-e-ilustra%C3%A7%C3%A3o-quente-do-vetor-bebida-energia-102698413.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
