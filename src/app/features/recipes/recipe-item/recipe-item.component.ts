import { Component } from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  recipes: RecipeModel[] = [
    {name:'BAKED LAMB AND YOGURT', description: 'Albanian Tavë kosi is a simple recipe of baked lamb and yogurt with rice, seasoned with oregano and garlic. The recipe originates from the Albanian city Elbasan so is also known as Tavë Elbasani.\n' +
        '\n' +
        'Some see Tavë Kosi as a comfort food dish. The soft, tender lamb baked with rice, oregano and garlic underneath a yogurt mixture has the most amazing aroma.',
      imgUrl: 'https://www.myalbanianfood.com/wp-content/uploads/2017/03/Albanian-Tave-Kosi-1300x731.jpg'},
    {name:'Summer Squash Pie', description: 'Using one of summers most delicious vegetables this crust-less pie has a sweet taste of summer while being a quick, easy and cheap summer squash pie recipe. A delicious alternative to courgettes!\n' +
        '\n' +
        'We grow our summer squash in the garden along with courgettes and butternut squash which are all part of the same pumpkin family. In Albania the family name for pumpkin is ‘Kungull‘ and therefore a lot of recipes with mention whether to use a big or small pumpkin – butternut squash / pumpkins vs summer squash / courgettes for example. ', imgUrl: 'https://www.myalbanianfood.com/wp-content/uploads/2017/08/Albanian-Summer-Squash-Pie-1300x731.jpg'},
    {name:'Shendetlie', description: 'Albanian Shendetlie is an Albanian dessert and is a cross between a biscuit and cake. The first texture when removed from the oven resembles a biscuit however, once the syrup has been added the baked dough softens and the final finish is a cake texture.\n' +
        '\n' +
        'Making this recipe for the first time was a bit confusing as it is a dough mixture not a runny pouring texture that you would expect for cakes – especially as the taste is so similar to Albanian Ravani. The dough is pressed down, baked and the adding of the syrup is what makes it’s texture cake like.', imgUrl: 'https://www.myalbanianfood.com/wp-content/uploads/2017/05/Albanian-Shendetlie-1300x731.jpg'},
    {name:'Japrak', description: 'Stuffed vine leaves (Dolma Japrak) always remind me of the summer and has got to be one of the best recipe to have when the sun is shinning! These refreshing rolled vine leaves stuffed with minced lamb, onions, rice, herbs and seasonings are simmered until tender and delicious. \n' +
        '\n' +
        '‘Dolma’ means stuffed vegetables and although grape vine leaves are most popular you can also stuff any form of Greens (Cabbage is most popular), Onions,  Peppers, Aubergines, Squash, Tomatoes and Courgettes. ', imgUrl: 'https://www.myalbanianfood.com/wp-content/uploads/2017/04/Albanian-Dolma-Japrak-1300x731.jpg'},
    {name:'Fli', description: 'Being one of the most favourite dishes of Albania, Flija is a layered pancake made with simple ingredients and baked slowly over a few hours. Served hot, fresh and with honey or greek yogurt (or both). We love having it for lunch, pudding or in fact anytime of the day. There is also an official Flia Day where you get together with family to prepare and eat Flija – March 18th.', imgUrl: 'https://www.myalbanianfood.com/wp-content/uploads/2017/02/Albanian-Flija-Sliced-1-1300x731.jpg'}
  ]

}
