export class PotionBag {

    constructor(potions) {
        this.potions = potions;
    }
    createPotions(ingredients, cauldron) {
        const createdPotions = [];
        for (let i = 0; i < ingredients.length; i++) {
            for (let j = i + 1; j < ingredients.length; j++) {
                const ingredient1 = ingredients[i];
                const ingredient2 = ingredients[j];

                const potion = cauldron.createPotion(ingredient1, ingredient2);

                createdPotions.push(potion);

            }
        }

        return createdPotions;
    }





}