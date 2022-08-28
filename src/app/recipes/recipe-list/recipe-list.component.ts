import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recSrv: RecipeService,
    private rtr: Router,
    private actRtr: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recSrv.getRecipe();
  }

  onNewRecipe() {
    this.rtr.navigate(['new'], { relativeTo: this.actRtr });
  }
}
