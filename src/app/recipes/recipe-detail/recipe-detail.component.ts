import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;
  constructor(
    private recSrv: RecipeService,
    private actRtr: ActivatedRoute,
    private rtr: Router
  ) {}

  ngOnInit(): void {
    const id = this.actRtr.params.subscribe((par: Params) => {
      this.id = +par['id'];
      this.recipeDetail = this.recSrv.getRecipeByID(this.id);
    });
  }

  onAddtoShoppingList() {
    this.recSrv.addIngredientsToShoppingList(this.recipeDetail.ingdt);
  }

  onEditServer() {
    this.rtr.navigate(['edit'], { relativeTo: this.actRtr });
  }
}
