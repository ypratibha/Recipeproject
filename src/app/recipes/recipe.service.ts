import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'New Test Recipe',
      'This is simply a test recipe',
      'https://www.washingtonpost.com/resizer/WZA859eqdl1br735VlartjQpvYo=/arc-anglerfish-washpost-prod-washpost/public/KO6XMOQNAEI63CHIYWG4HW5O4I.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fresh fries', 10),
        new Ingredient('burger', 5),
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test recipe',
      'https://www.washingtonpost.com/resizer/WZA859eqdl1br735VlartjQpvYo=/arc-anglerfish-washpost-prod-washpost/public/KO6XMOQNAEI63CHIYWG4HW5O4I.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 10)]
    ),
  ];

  constructor(private shSrv: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeByID(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ings: Ingredient[]) {
    this.shSrv.addToIng(ings);
  }
}
