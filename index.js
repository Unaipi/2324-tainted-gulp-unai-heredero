import {
    getData,getData2
} from "./service/service.js";
import {
    Ingredients
} from "./classes/ingredients.js";
import {
    Cauldron
} from "./classes/cauldron.js"
import {
    PotionBag
} from "./classes/PotionBag.js"
import {
    Character
} from "./classes/Character.js";

const execute = async () => {
    try {
        const data = await getData();
        const data2 = await getData2();

        const ingredients = Ingredients.load(data);

        const pouchIngredients = data2.players[0].pouch_red;

        const josephData = data2.players[0]
        
        showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients)

        let potions = [];

        const potion1 = cauldron.createPotion("Bear Claws", "Bee",);
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");        
        showPotion(potion4);

        const potionBag = new PotionBag(potions);

        const createdPotions = potionBag.createPotions(pouchIngredients, cauldron);
        showPotions(createdPotions)
        const fullName = `${josephData.name} the ${josephData.class}`

        const playerData = [
            fullName,
            josephData.health,
            josephData.magick,
            josephData.stamina,
        ];
        
        const JOSEPH = Character.from(playerData, createdPotions);
        showCharacter(JOSEPH)

        JOSEPH.drinkEmAll(JOSEPH.potions)
        
    } catch (error) {
        //ERRORRRRRR
        console.log(error.message)
    }
}

execute();

const showIngredients = (ingredients) => {
    const ingredientes = ingredients.ingredients;

    ingredientes.forEach(element => {
        console.log(element.name);
        console.log(element.effects);
        console.log("-----------------------------------------------------------")

    });

}

const showPotion = (potion) => {
    console.log("------------------------------------")
    console.log(potion)
}

const showPotions = (createdPotions) => {
    createdPotions.forEach(element => {
        console.log("------------------------------------")
        console.log(element.name)
        console.log(element.value)
        console.log(element.weight)
        console.log(element.time)
        console.log("------------------------------------")
    });

}

const showCharacter = (character) => {
    const characterPotions = character.potions
    console.log("************************************");
    console.log(character.fullName);
    console.log("------------------------------------");
    console.log("Health: " + character.health);
    console.log("Magick: " + character.magick);
    console.log("Stamina: " + character.stamina);
    console.log("Potion 1: " + character.potions[0].name);

    characterPotions.forEach((element, index) => {
        console.log("Potion "+index+": "+element.name)
    });
};
