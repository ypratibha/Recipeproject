import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'New Test Recipe',
      'This is simply a test recipe',
      'https://www.washingtonpost.com/resizer/WZA859eqdl1br735VlartjQpvYo=/arc-anglerfish-washpost-prod-washpost/public/KO6XMOQNAEI63CHIYWG4HW5O4I.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test recipe',
      'https://www.washingtonpost.com/resizer/WZA859eqdl1br735VlartjQpvYo=/arc-anglerfish-washpost-prod-washpost/public/KO6XMOQNAEI63CHIYWG4HW5O4I.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
