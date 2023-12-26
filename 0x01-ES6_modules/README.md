<br/>

![Downloads](https://img.shields.io/github/downloads/ShaanCoding/ReadME-Generator/total) ![Contributors](https://img.shields.io/github/contributors/ShaanCoding/ReadME-Generator?color=dark-green) ![Issues](https://img.shields.io/github/issues/ShaanCoding/ReadME-Generator) ![License](https://img.shields.io/github/license/ShaanCoding/ReadME-Generator) [![Discord](https://img.shields.io/discord/199663269106024449)](https://discord.gg/6Kf422a)

## Table Of Contents

- [About The Modules](#about-the-project)
- [Built With](#built-with)

- [Types of Export/Import in ES6](#contributing)

- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](images/screenshot.png)

- In secret-messages.js, DOM objects are created to reference the button element and paragraph element using the DOM API.

- These objects are stored in buttonElement and pElement, respectively.
  The function toggleHiddenElement() is declared. It can accept either of these elements as an input called domElement and will either show or hide that element depending on its current style.display value.
- An event listener is added to buttonElement to listen for 'click' events and respond by calling toggleHiddenElement() with pElement as the argument

## Built With

This show how Modules works:

- [JavaScript](https://www.javascript.com/)

## Types of Export/Import in ES6

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
