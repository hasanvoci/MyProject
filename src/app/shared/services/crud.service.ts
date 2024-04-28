import {Injectable} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class CrudRecipeService {
  constructor(
    private http: HttpClient) {
  }
  url = 'http://localhost:3000/recipes'
  private dataSubject = new Subject<RecipeModel[]>();
  data$: Observable<RecipeModel[]> = this.dataSubject.asObservable();


  getRecipes() {
    return this.http.get<RecipeModel[]>(this.url)
  }

  postNewItem( newItem: object) {
    return this.http.post(this.url, newItem)
  }

  deleteItem(url: string) {
    return this.http.delete(url)
  }

  putItem(id: string, editedItem: object){
    return this.http.put(id, editedItem)
  }

  reloadData(): void {
    this.getRecipes().subscribe(data => {
      this.dataSubject.next(data);
    });
  }

}
