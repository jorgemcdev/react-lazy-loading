# React Lazy Loading and Code Split
Webpack 2 and React Router lazy loading and code splitting sample implementation.

Partial application loading is an essential technique for improving the time-to-first-impression for single page applications. The goal is to prioritize loading of the code needed to render the view. 

To achive this, the Building process will generate the following files:
- vendor.js, to separate libraries from app logic so that we can leverage browser caching.
- app.js, this file have the shared application code.
- one file for each route, react-router automatically calls when a route is requested.

## Install
```
$ git clone https://github.com/jorgemcdev/react-lazy-loading

```
## Run in Devolper Mode
```
$ npm run dev

```
## Build 
```
$ npm run build
```
## Run the build
```
$ npm start
```

## Links
Great Article: http://moduscreate.com/code-splitting-for-react-router-with-es6-imports/