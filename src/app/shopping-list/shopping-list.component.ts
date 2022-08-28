import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shpServ: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shpServ.getIngredients();
    this.shpServ.ingredientsChanged.subscribe((ings: Ingredient[]) => {
      this.ingredients = ings;
    });
  }
}
