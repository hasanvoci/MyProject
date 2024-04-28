import { Component } from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";
import {HttpClient} from "@angular/common/http";
import {CrudRecipeService} from "../../shared/services/crud.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {


  url = 'http://localhost:3000/recipes'
  recipe!: RecipeModel
  recipes!: RecipeModel[]
  name: string = '';
  desc: string = '';
  imgUrl: string = '';

  constructor(
    private crud: CrudRecipeService,
    private http: HttpClient
  ) {
  }

  getRecipes() {
    this.http.get<RecipeModel[]>(this.url).subscribe(recipes => {
      this.recipes = recipes;
    })
  }

  postNewItem() {
    const newItem = {
      name: this.name,
      description: this.desc,
      imgUrl: this.imgUrl
    }
    this.crud.postNewItem(newItem).subscribe(data => {
      this.crud.reloadData();
      console.log(data);
    })
  }
}
