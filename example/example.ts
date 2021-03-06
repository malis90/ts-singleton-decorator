import { SingletonClass } from "ts-singleton-dactorator";

let objetsCounter = 0;

@SingletonClass()
class SingletonTester {
  constructor() {
    objetsCounter++;
    console.log("constructor called: ", objetsCounter);
  }
}

new SingletonTester();
new SingletonTester();
new SingletonTester();
