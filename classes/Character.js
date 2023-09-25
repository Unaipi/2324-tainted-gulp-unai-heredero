export class Character {
    constructor(fullName, health, magick, stamina, potions) {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from(playerData, potions) {
        return new Character(...playerData, potions);
    }

    drinkEmAll(potions) {
        potions.forEach(potion => {




            if (potion.name.includes("Potion")) {

                if (potion.name.includes("Health")) {
                    this.health += potion.value;
                    console.log(this.fullName + " drinks " + potion.name + " and gains " + potion.value + " of health.")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                } else if (potion.name.includes("Magicka")) {
                    this.magick += potion.value;
                    console.log(this.fullName + " drinks " + potion.name + " and gains " + potion.value + " of magick.")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                } else if (potion.name.includes("Stamina")) {
                    this.stamina += potion.value;
                    console.log(this.fullName + " drinks " + potion.name + " and gains " + potion.value + " of stamina.")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                } else if (potion.name.includes("Failed")) {
                    console.log("Potion has no effect")
                } else if (potion.name.includes("Sanity")) {
                    console.log("POTION OF SANITY CONSUMED, YOU WON!!!!!")
                    this.health += potion.value;
                    this.magick += potion.value;
                    this.stamina += potion.value;
                } else {

                    this.health++;
                    this.magick++;
                    this.stamina++;
                    console.log(this.fullName + " drinks " + potion.name + " and gains +1 in every stat")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                }



            } else if (potion.name.includes("Poison")) {
                if (potion.name.includes("Health")) {
                    this.health -= potion.value;
                    console.log(this.fullName + " drinks " + potion.name + " and loses " + potion.value + " of health.")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                } else if (potion.name.includes("Magicka")) {
                    this.magick -= potion.value;
                    console.log(this.fullName + " drinks " + potion.name + " and loses " + potion.value + " of magick.")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                } else if (potion.name.includes("Stamina")) {
                    this.stamina -= potion.value;
                    console.log(this.fullName + " drinks " + potion.name + " and loses " + potion.value + " of stamina.")
                    console.log(this.health)
                    console.log(this.magick)
                    console.log(this.stamina)
                } else {
                    this.health--;
                    this.magick--;
                    this.stamina--;
                }
            }

            if (this.health <= 0) {
                console.log("YOU DIED!")
                return
            } else if (this.magick <= 0) {
                console.log("NO MAGICK LEFT!")
                return
            } else if (this.stamina <= 0) {
                console.log("YOU CAN'T KEEP GOING. NO STAMINA!")
                return
            }
            console.log("*********************************")
        });


    }

}