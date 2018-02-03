
alert("Welcome warrior, we need you to save the world.");
const name = prompt("I've never seen you around here, what is your name?");
const race = prompt("Nice to meet you" + " " + name +" "+ ", Are you an Saiyan, Android, or a Namekian");
alert("A very dangerous man has appeared and is planing to destroy the earth!!");
alert(name + " " + "since you're a " + race +" " + " We think you can handle this problem");
var choice = prompt("Will you Fight, Negotiate, or Run");

var randomNumber = Math.round(Math.random());


if (choice === "Fight") {
  if (randomNumber === 0) {
     alert("You were no match for him, he destroyed the world.");
  } else {
     if (race === "Namekian") {
       alert("Good choie!" + " " + race + "'s" + " " + "are really good with words.");
       alert("You managed to convince him to leave the planet, Way to go!!")
     }
     else {
       alert("Are you sure?" + " " + race + "'s" + " " + "Aren't known for their negotiating skills.");
       alert("You got him even more pissed and he destroyed the universe")
     }
  }

} else {
  alert("Oh no, He destroyed the world. Game Over");
}
