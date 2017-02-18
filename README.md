# Vending Machine

A vending machine using React/Redux

# Live demo

[https://eugeneglova.github.io/vending-machine/static/index.html](https://eugeneglova.github.io/vending-machine/static/index.html)

# Run the server

Make sure you have [git](https://git-scm.com/downloads) and [Node](https://nodejs.org) version 6 installed.

```sh
git clone https://github.com/eugeneglova/vending-machine.git
cd vending-machine
npm install
npm run dev
```

# Open in browser

 Open [http://localhost:8080](http://localhost:8080) in your browser

# Tech stack

> Why did you choose the frameworks and libraries you did?

* [React](https://facebook.github.io/react/) - because it works very effectively with DOM.
* [Redux](http://redux.js.org/) - because it's great state manager with its reducers and unidirectional data flow.
* [Redux Thunk](https://github.com/gaearon/redux-thunk) - allows to manage async actions.
* [ES2015](https://babeljs.io/learn-es2015/) - to write less code and use modern features.
* [Babel](http://babeljs.io/) - to support old browsers.
* [Webpack](https://webpack.js.org/) - to watch, lint, transpile and bundle modules.
* [ESLint](http://eslint.org/) - to write great code.
* [Bootstrap](http://getbootstrap.com/) - to build simple responsive UI very fast.

> What functionality did you choose to focus on? To omit? Why?

There was no detailed specifications on how it should work, so I implemented it all using my assumptions.

> What were your design/architecture considerations?

I've checked several image about vending machines to get features they provide and designed really simple analog adapted for web browser.

All of them have different kind of products and all accept money.

I decided to use just US dollar banknotes 1, 2, 5, 10, 20 and 50 and set prices as int numbers.

Also I've added number of products so the product could be out of stock.

I considered to use num pad keybord to select product like in real vending machine, but decided to use just a button as we use browser and it's easy to choose product by clicking buy button.
