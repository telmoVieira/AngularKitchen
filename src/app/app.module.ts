import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListEditComponent } from './shoppingList/shoppingEdit/shoppingEdit.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { RecepisComponent } from './recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppingList/shoppingList.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    RecepisComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeAddComponent,
    RecipeEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
