![ga-logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Objects Lab

Title: Objects Lab<br>
Class: SEI <br>
Contributors: GA Instructional Team<br>
Topics: JavaScript objects

## Me
  - Create an empty object called `me`.
  - Assign it properties for `name`, `age`, `height` and `homeState` with corresponding values. 
  - Log the value of the object to the console. You should see all the keys & values!
  - Using dot notation, log just the `name` property in your object.
  - Using bracket notation, update the value of **age** to be 1000 years old.
  - Using dot notation, `console.log()` **age** to verify that it has been updated.
  - Add a property to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.

## Slimer
```javascript
const monster = {
   name: "Slimer",
   color: "greenish",
   variety: "plasm or ghost or something"
}
```
Given the `slimer` object:
  - Log the `name`.
  - Change the `variety` to `"creature"`.
  - Add a property to the object called `age` and set its value to 6.
  - Log the object to make sure `variety` and `age` are what you want them to be.
  - Give the slimer a method to introduce himself and then call the method.

## Ogres
Let's say you want to make an adventure where an adventurer and an ogre fight each other. Write a very small program that will simulate a battle between your adventurer and an ogre. 

  - The battle should play out automatically.  
  - The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.  
  - The ogre's attacks should have random damage value, but the adventurer should always attack with the same value. 
  - Whenever someone's hitpoints go below zero, the other person wins the battle.  

Create objects and have them interact. Remember, you are modeling things from real life. (Sort of). So just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

  - How would you define your `adventurer`? Your adventurer will want a **name** and **hitpoints**. What else would your adventurer need?
  - How would you define an `ogre`? Your ogre will want **hitpoints**, right? (Right.)
  - How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
  - Use `console.log()` to show each attack, how many hitpoints the person being attacked loses, the updated stats for the ogre and the adventurer.  At the end log the winner.
  - You can use a loop to make the game play out. (What kind of loop? How and when will it stop?)
  - Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Like a `game` object maybe?

Doing this efficiently requires planning.  If you just started coding immediately without thinking through what you're trying to do and planning, then you're doing it wrong. Software engineering can be just as much planning as it is writing code!

