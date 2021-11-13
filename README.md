# Typescript Singleton Decorator (ts-singleton-dactorator)

This decorator help to turn any of you typescript class into singleton class.

## How To Install

```
npm i --save ts-singleton-dactorator
```

and then you need to enable `experimentalDecorators` in your `tsconfig.json` file

```
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

## Usage

```
@SingletonClass()
class SingletonTester {
    public date: Date;
    constructor() {
        this.date = Date.now();
    }
}

const obj = new SingletonTester();
const obj2 = new SingletonTester();

console.log(obj.date === obj2.date)
// -> true
```
