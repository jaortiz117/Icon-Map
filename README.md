# Icon-Map

[![GitHub issues](https://img.shields.io/github/issues/jaortiz117/icon-map.svg)](https://github.com/jaortiz117/icon-map/issues)[![GitHub issues](https://img.shields.io/npm/v/@jaortiz117/icon-map.svg)](https://github.com/jaortiz117/icon-map/issues)

Simple library for displaying an image within an image. Used in the 6th Gen MoonBuggy GUI from my other repositories. It started as a way to show visual location data from a server not connected to the internet. It received Latitude and Longitude input from a GPS device and sent it over a closed network.


For now I'm just making the library more general to use. This way I can use it for the following years of the competition.

## Install

```
$ npm install @jaortiz117/icon-map
```

## Usage

```js
const iconMap = require("@jaortiz117/icon-map");
//Note: DOM elements must have defined dimensions
//instantiate the map
var map = new iconMap.Map(document.getElementById("parentID"), document.getElementById("iconID"));

var newYPosition = 10;
var newXPosition = 10;

//reposition icon within parent
map.refresh({
  y: newYPosition,
  x: newXPosition
});

```
