import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    constructor() { }

    ngOnInt() {

    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

}