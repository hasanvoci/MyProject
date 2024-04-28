import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {CrudRecipeService} from "../../../shared/services/crud.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipeCh!: RecipeModel;
  url = 'http://localhost:3000/recipes'
  name: string = '';
  desc: string = '';
  imgUrl: string = '';
  constructor(private crud: CrudRecipeService) {
    }

  deleteItem(){
    this.crud.deleteItem(this.url+'/'+this.recipeCh.id).subscribe(value => {
      this.crud.reloadData()
      console.log(value)
    })
 }

 editItem(){
   const newItem = {
     name: this.name,
     description: this.desc,
     imgUrl: this.imgUrl
   }
    this.crud.putItem(this.url+'/'+this.recipeCh.id, newItem ).subscribe( data =>{
      console.log(data)
      this.crud.reloadData()
    })
 }
}
