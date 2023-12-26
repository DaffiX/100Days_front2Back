<br/>

## Contents

- [About The Modules](#about)
- [Built With](#built-with)

- [Types of Export/Import in ES6](#export/import-in-ES6)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About

Creating modules helps in:

- Make it easier to keep sensitive information from other modules
- Easier to reuse logics
- Make it easier to debug and help in fix bugs
- prevent namespace pollution as you only import what is needed

![Screen Shot](images/screenshot.png)

- In secret-messages.js, DOM objects are created to reference the button element and paragraph element using the DOM API.

- These objects are stored in buttonElement and pElement, respectively.
  The function toggleHiddenElement() is declared. It can accept either of these elements as an input called domElement and will either show or hide that element depending on its current style.display value.
- An event listener is added to buttonElement to listen for 'click' events and respond by calling toggleHiddenElement() with pElement as the argument

## Built With

This show how Modules works:

- [JavaScript](https://www.javascript.com/)

## Export/Import in ES6

1. Named Exports:Multiple variables, functions, or classes can be exported by name from a module.

```javascript
// In the module file
export const variable1 = "Value1";
export const variable2 = "Value2";

export function myFunction() {
  // function implementation
}

export class MyClass {
  // class implementation
}
```

Importing syntax

```javascript
// In another module
import {
  variable1,
  variable2,
  myFunction,
  MyClass,
} from "./path-to-your-module";
```

2. Default Export (`A module can have almost one default export`)

```javascript
// In the module file
const myVariable = "some value";
export default myVariable;
```

## License

Distributed under the MPL-2.0 License. See [LICENSE](https://github.com/) for more information.

## Authors

- **Daffy Seleman** - _Student of Knowledge_ - [Daffy Seleman](https://github.com/DaffiX) - _All Work_

## Acknowledgements

- [codecademy](https://codecademy.com/)
