/**********************************
author: Javier Ortiz
**********************************/

//west lat limit:  -86.655645
//east lat limit:  -86.652185
//north long limit: 34.711180
//south long limit: 34.709558

// module.exports = function IconMap{
  class IconMap{

    // constructor (width, height, elemWidth, elemHeight){
    //   this.width = width;
    //   this.height = height;
    //   this.elemWidth = elemWidth;
    //   this.elemHeight = elemHeight;
    // }
    constructor (parent, element, yBound, xBound){
      this.paren = parent;
      this.element = element;
      this.yBound = yBound || false;
      this.xBound = xBound || false;
      // this.elemWidth = element.style.width;
      // this.elemHeight = element.style.height;
    }
  
    refresh(location){
      move(this.paren, this.element, location.x, location.y, this.xBound, this.yBound);
    }
  
    // setDimensions(width, height, elemWidth, elemHeight){
    //   this.width = width;
    //   this.height = height;
    //   this.elemWidth = elemWidth;
    //   this.elemHeight = elemHeight;
    // }
    // setDimensions(parent, element){
    //   this.width = parent.style.width;
    //   this.height = parent.style.height;
    //   this.elemWidth = element.style.width;
    //   this.elemHeight = element.style.height;
    // }
  
    printer(){
      console.log("Hello World");
    }
  }
  var userDimensions;//deprecated, used as global variable
  
  function setDimensions(width, height, elemWidth, elemHeight){//deprecated
    userDimensions = {
      w:width,
      h:height,
      ew: elemWidth,
      eh: elemHeight
    };
  }
  
  function GPSRefresh(lat, long){//setDimensions needs to be set first //deprecated
    move(userDimensions.w, userDimensions.h, userDimensions.ew, userDimensions.eh, lat, long);
  }
  
  function move(paren, elem, x, y, xBound, yBound) {
    /* 
    Fixes (Maria Vilanova):
    -> Created a variable to store the "BoundingClientRect" of the icon element, 
        to access its size and position easier
    -> Changed the "out_max" of "yPos" to the parent's height minus the location icon's height
    -> Changed the "out_max" of "xPos" to the parent's width minus the location icon's width
    -> Changed the "out_min" of "yPos" to 0, so the icon can move within the entire scope of the map
  
    Note: Three ways to access an element's size or position attributes (ex. width)
    1) elem.style.width
    2) elem.getBoundingClientRect().width
    3) elem.offsetWidth (for width and height only)
    */
  
    // var elem = document.getElementById("element");
  
    var elemStyle = elem.style;
  
    elemStyle.position = "absolute";
    elemStyle.width = elem.width + "px";
    elemStyle.height = elem.height + "px";
  
    // var paren = document.getElementById("parent");
    var parenStyle = paren.style;
  
    parenStyle.position = "relative";
    parenStyle.width = paren.width + "px";
    parenStyle.height = paren.height + "px";
  
  
    paren = paren.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();
  
    // console.log("input Coords: "+ lat + ", "+ long);
    // console.log("elem pos: "+elemStyle.left+ ", "+ elemStyle.top);
  
    var parenPos = {
      left: paren.left,
      top: paren.top,
      right: paren.left + paren.width
    };
    // console.log(y);
    // console.log(yBound.bottom);
  
    yPos = map(y,
      yBound.bottom || parenPos.top,
      yBound.top || parentPos.top+paren.height,
      0,
      paren.height-elemRect.height);
  
    xPos = map(x,
      xBound.bottom || parenPos.left,
      xBound.top || parentPos.left+paren.width,
      parenPos.left,
      paren.width-elemRect.width);
  
      elem.style.top = yPos + 'px';
      elem.style.left = xPos + 'px';
      }
  
      function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
  
      module.exports = IconMap;
  