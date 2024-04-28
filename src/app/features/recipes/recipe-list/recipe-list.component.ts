import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {CrudRecipeService} from "../../../shared/services/crud.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  @ViewChild('inputElement') input!: ElementRef;

  recipes!: RecipeModel[]
  url = 'http://localhost:3000/recipes';


  constructor(
    private crud: CrudRecipeService
  ) {

  }
  ngOnInit() {
    this.crud.data$.subscribe(data => {
      this.recipes = data;
    });
    this.getRecipes();
  }
  getRecipes(){
    this.crud.getRecipes().subscribe( recipes => {
      this.recipes = recipes;
    })
  }

  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }
  // inputChange(event: any) {
  //   console.log(event.target.value)
  // }
  add() {
    // console.log(input.value)
    console.log(this.input.nativeElement.value)
  }

}
