# Bucklescript-Tea Starter kit


## Description

A simple and minimal starter kit for [bucklescript-tea](https://github.com/OvermindDL1/bucklescript-tea). This starter kit uses:

* [ReasonML (Syntax)](https://reasonml.github.io/)
* [webpack4 (for building browser compatible JS)](https://webpack.js.org/)
* [bs-css (statically typed CSS)](https://github.com/SentiaAnalytics/bs-css)

## Install

Run the following commands for installation:

```
git clone https://github.com/feluxe/bs-tea-starter-kit.git

cd bs-tea-starter-kit

npm install
```

## Build

Run this to build the starter kit:

```
npm run build
```

Explanation: The above command runs BuckleScript to convert `src/Demo.re` into `src/Demo.bs.js` and then it runs Webpack to convert `src/Demo.bs.js` into a browser compatible `dist/bundle.js`.


## Watch / Server

This watches the `src` directory for changes and rebuilds the files automatically. It also runs a dev server at `localhost:9000`, showing the results.

```
npm run watch
```

