# Webpack-React

Very simple starter kit for React using Webpack. Includes:
* [React Hot Loader](https://github.com/gaearon/react-hot-loader) - Hot Reloading
* Babel ES6 - ES6 Syntax Loader
* [React Router](https://github.com/rackt/react-router)
* [Import SASS Files](https://github.com/jtangelder/sass-loader)
* [Jasmine Tests](http://jasmine.github.io/2.3/introduction.html) with [Istanbul](https://github.com/gotwarlost/istanbul) Coverage Generation

Run 

```
npm start
```

and navigate to http://localhost:8080.

`start` is a script located in the package.json that runs `webpack-dev-server --hot --inline`

### Specs
Specs can be run using 

```
npm test
```

This will run all `__spec__.js` files and generate a coverage report on all `js` files.

`test` is a script located in the package.json that runs `karma start`

#### Coverage
To open the coverage report. Navigate to the root of the repo and run:

```
open coverage/PhantomJS\ 1.9.8\ \(Mac\ OS\ X\ 0.0.0\)/index.html
```

TODO:
* Review SASS import
* Flux/Redux/Another Flux
