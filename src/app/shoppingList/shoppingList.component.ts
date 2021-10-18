import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private slService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientChanged
        .subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        )
    }

    ngOnDestroy(){
     this.subscription.unsubscribe();        
    }
}