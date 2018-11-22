const iconMap = require("./src/IconMap.js");

exports.Map = iconMap;

exports.getRndInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

exports.getRndNumber = function(min, max){
  return (Math.random() * (max - min) ) + min;
}
