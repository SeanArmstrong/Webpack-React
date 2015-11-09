# Webpack-React

Very simple starter kit for React using Webpack. Includes:
* [React Hot Loader](https://github.com/gaearon/react-hot-loader) - Hot Reloading
* Babel ES6 - ES6 Syntax Loader
* [React Router](https://github.com/rackt/react-router)
* [Import SASS Files](https://github.com/jtangelder/sass-loader)
* Jasmine Tests with Istanbul Coverage Generation (WIP)

Run 

```
npm start
```

and navigate to http://localhost:8080.

`start` is a script located in the package.json that runs `webpack-dev-server --hot --inline`

### Specs
Specs can be run using 

```
karma start
```

This will run all `__spec__.js` files and generate a coverage report on all `js` files. (This current has hardcoded values. karma config needs updating)

TODO:
* Review SASS import
* Flux/Redux/Another Flux
