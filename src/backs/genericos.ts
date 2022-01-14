import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";
// import { Hero } from "./classes/Hero";

// import { Hero as SuperHero, Hero2} from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// const ironman = new SuperHero("Ironman", 1, 55);

// const ironman = new Hero("Ironman", 1, 55);
// console.log(ironman);
// console.log(ironman.power);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject("hola mundo");

// const name: string = "Fernando";
// console.log(genericFunctionArrow(3.141618).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
