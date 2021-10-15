import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecepisComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shoppingList/shoppingList.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipeDetail/recipeDetail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecepisComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}