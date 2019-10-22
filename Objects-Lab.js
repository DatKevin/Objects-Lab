///Me
let me = {
	name: "Kevin Dat Nguyen",
	age: 25,
	height: `5'10"`,
	homeState: "California"
}

console.log(me)

me["age"] = 1000
console.log(me.age)
me["place of residence"] = "Mountain View"

///Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   variety: "plasm or ghost or something"
}

console.log(monster.name)
monster.variety = "creature"
monster.age = 6
console.log(monster)
monster.greetings = () => {console.log("Hello my name is " + monster.name + 
	" and I am your " + monster.color + " nightmare!") }

monster.greetings()

///Ogres
let adventurer = {
	name: "Gillion",
	hp: 20,
	atk: 10
}

let ogre = {
	name: "Garrosh",
	species: "Ogre",
	hp: 50,
	///Randomly generates a number between 1 and 10
	atkMultiplier: 10
}
///Battle must play out automatically with the ogre and hte adventurer taking turns
///Ogre attack values are random while the players are set
for (let i = 1; (adventurer.hp > 0) && (ogre.hp > 0); i++) {
	if (i % 2 == 0) {
		ogreDamage = Math.floor((Math.random()*ogre.atkMultiplier) + 1)
		adventurer.hp -= ogreDamage
		console.log("Oh no! " + adventurer.name + " was attacked for " 
			+ ogreDamage + " points of damage! They have " + adventurer.hp + " hp left!")
		console.log("")
	}
	else {
		ogre.hp -= adventurer.atk
		console.log(adventurer.name + " attacks and deals " + adventurer.atk 
			+ " points of damage!" + " The " + ogre.species + " " + ogre.name + " only has " 
			+ ogre.hp + " left!")
		console.log("")
	}
}
if (adventurer.hp <= 0) {
	console.log(adventurer.name + " was slain and they were never heard from again")
}
else if (ogre.hp <= 0) {
	console.log("Congratulations! Gillion has murdered the " + ogre.species +
		" " + ogre.name + " in cold blood!")	
}