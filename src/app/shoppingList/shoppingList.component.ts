import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent {
    ingredients: Ingredient[];

    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        this.slService.ingredientChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        )
    }
}