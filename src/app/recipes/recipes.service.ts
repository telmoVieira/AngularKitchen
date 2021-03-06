import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppingList/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    // new Recipe('Arroz de Pato',
    //  'A melhor receita de arroz de pato esta aqui', 
    // 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/101C5A5D-C290-4A58-B372-A0100BC48778/Derivates/1FAC3616-88EB-4B3F-B68A-7B0CB5DAF2C9.jpg', 
    // [
    //     new Ingredient('Pato', 1),
    //     new Ingredient('Arroz',2)
    // ]),
    // new Recipe('Sopa de Cação', 
    // 'A melhor receita de cação esta mesmo aqui!', 
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3ac6RrNth8XD-F1qFIjs9ZkIbnKPlhb6hw&usqp=CAU',
    //  [
    //      new Ingredient('Cação', 1),
    //      new Ingredient('Batatas', 20)

    //  ])  
    // ];

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
   
}