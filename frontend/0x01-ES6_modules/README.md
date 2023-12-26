In secret-messages.js, DOM objects are created to reference the button element and paragraph element using the DOM API. These objects are stored in buttonElement and pElement, respectively.
The function toggleHiddenElement() is declared. It can accept either of these elements as an input called domElement and will either show or hide that element depending on its current style.display value.
An event listener is added to buttonElement to listen for 'click' events and respond by calling toggleHiddenElement() with pElement as the argument
