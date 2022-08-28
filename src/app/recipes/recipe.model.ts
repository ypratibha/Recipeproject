import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingdt: Ingredient[];

  constructor(name: string, desc: string, imgPath: string, ings: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.ingdt = ings;
  }
}
