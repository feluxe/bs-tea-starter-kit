# Bucklescript-Tea Starter kit


## Description

A simple and minimal starter kit for [bucklescript-tea](https://github.com/OvermindDL1/bucklescript-tea). This starter kit uses:

* [ReasonML (Syntax)](https://reasonml.github.io/)
* [webpack4 (for building browser compatible JS)](https://webpack.js.org/)
* [bs-css (statically typed CSS)](https://github.com/SentiaAnalytics/bs-css)

## Install

Run the following commands to install the starter kit:

```
git clone https://github.com/feluxe/bs-tea-starter-kit.git

cd bs-tea-starter-kit

npm install
```

## Build

This runs `bsb` (bucklescript) to convert the `.re` file to `.js` and then it runs `webpack` to convert the `.js` file to a browser compatible `.js` file.

```
npm run build
```

## Watch / Server

Watche the src directory for changes and run a dev server at `localhost:9000`.

```
npm run watch
```

