

// document.addEventListener("DOMContentLoaded", function () {
   
//    / 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("Waaaater Sucks It Really Really SUUUUUCKS!! (Happy Gilmore) ");
});

var div = document.getElementById( 'div_id' );
div.onmouseover = function() {
  this.style.backgroundColor = 'green';
  var h2s = this.getElementsByTagName( 'h2' );
  h2s[0].style.backgroundColor = 'blue';
};
div.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  var h2s = this.getElementsByTagName( 'h2' );
  h2s[0].style.backgroundColor = 'transparent';
};

var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;

}

addAnother = function() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var children = ul.children.length + 1
    li.setAttribute("id", "element"+children)
    li.appendChild(document.createTextNode("Element "+children));
    ul.appendChild(li)
}