import {
    Ingredient
} from "./ingredient.js";

export class Ingredients {

    constructor(ingredients) {
        this.ingredients = ingredients
    }

    static load(data) {
        // DOS ALTERNATIVAS
        //1.
        return new Ingredients(data.ingredients.map(Ingredient.from));
        //2.
        //return new Ingredients(data.ingredients.map(ingredient => Ingredient.from(ingredient)));
    }

    find(name) {
        const ingredient = this.ingredients.find(element => element.hasName(name));
        if (ingredient === undefined)
            throw new Error(`Unknown ingredient ${name}`)
        return ingredient;
    }



}