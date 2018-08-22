<template>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>CSS cheat sheet</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
  </head>
  <body>
    <div class="container">
      <div class="box-1">
        <h1>Hello World!</h1>
        <p> Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
        </p>
      </div>
      <div class="box-2">
        <h1>Goodbye World!</h1>
        <p> Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
            Lorem impsum Lorem impsum Lorem impsum
        </p>
      </div>
      <div class="categories">
        <h2>Categories</h2>
        <ul>
          <li><a href="#">one</a></li>
          <li><a href="#">two</a></li>
          <li><a href="#">three</a></li>
          <li><a href="#">four</a></li>
        </ul>
      </div>
      <form class="my-form">
        <div class="form-group">
          <label>Name: </label>
          <input type="text" name="name">
        </div>
        <div class="form-group">
          <label>Email: </label>
          <input type="email" name="email">
        </div>
        <div class="form-group">
          <label>Message: </label>
          <textarea name="message"></textarea>
        </div>
        <input class="button" type="submit" value="Submit" name="">
      </form>
      <div class="block">
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
      </div>
      <div class="block">
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
      </div>
      <div class="block">
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
      </div>
      <!-- create some space after floating stuff -->
      <div class="clr"></div>
      <div id="main-block">
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
      </div>
      <div id="sidebar">
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum
      </div>
      <div class="clr"></div>
      <div class="p-box">
        <h1>Hello</h1>
        <h2>Goodbye</h2>
      </div>
      <ul class="my-list">
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
      <div class="space"></div>
    </div>
    <a class="fix-me button" href="">AAAAHH</a>
  </body>
</html>

</template>

<script>
export default {

}
</script>

<style scoped>

/*  for everything - reset of everything

* {

}

*/

body {
  background-color: #f4f4f4;
  color: #555555;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  /* Boldness of font, can also be bold or normal etc. */
  font-weight: 500;

  /*
  same as above
  font: normal, 16px, Helvetica, sens-serif
  */

  /* more space between the lines with a responsive unit */
  line-height: 1.6em;
  margin: 0;
}
.clr {
  /* clearing any floats */
  clear: both;
}
.button {
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border: none;
}
.button:hover {
  color: crimson;
}
.container {
  /* make it responsive */
  width: 80%;
  /* even amount of spacing all around */
  margin: auto;
  box-shadow: 5px 10px rgba(160,100,100,0.2);
  border: solid black 1px;
  margin: 10px auto;
}
.box-1 {
  background-color: #333;
  color: #fff;
  border-right: 2px red solid;
  border-width: 5px;
  /* will overwrite the rest */
  border: 3px blue solid;
  padding: 20px 0;
}
.box-1 h1 {
  font-family: Tahoma;
  font-weight: 800;
  font-style: oblique;
  text-decoration: overline;
  text-transform: full-width;
  letter-spacing: 0.2em;
  word-spacing: 1em;
}
.box-2 {
  border: 3px dotted #ccc;
  padding: 20px;
  margin: 20px;
}
.categories {
  border: 1px #ccc solid;
  padding: 10px;
  border-radius: 15px;
}
.categories h2 {
  text-align: center;
}
.categories ul {
  padding-left: 20px;
  list-style: armenian;
}
.categories li {
  padding-bottom: 5px;
  border-bottom: dotted 1px #333;
  /*
  if you wanted to put checkboxes
  list-style-image: url('./check.png');
  */
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: crimson;
}
/* whenn clicking then it flashes */
a:active {
  color: green;
}
a:visited {
  color: purple;
}
.my-form {
  padding: 20px;
}
.my-form .form-group {
  padding-bottom: 15px;
}
.my-form label {
  display: block;
}
/* target a specific input form by using [] */
.my-form input[type="text"], .my-form input[type="email"], .my-form textarea {
  padding: 8px;
  width: 100%;
}
.block {
  padding: 10px;
  float: left;
  width: 33.3%;
  border: 1px solid #ccc;
  /* including border and padding into width */
  box-sizing: border-box;
}
.space {
  margin-top: 200px;
}
#main-block {
  margin-top: 20px;
  box-sizing: border-box;
  float: left;
  width: 70%;
  padding: 10px;
}
#sidebar {
  margin-top: 20px;
  box-sizing: border-box;
  float: right;
  width: 30%;
  background-color: crimson;
  color: #fff;
  padding: 15px;
}
.p-box {
  color: crimson;
  margin-top: 50px;
  width: 800px;
  height: 500px;
  border: 1px solid black;
  /* influences child elements */
  position: relative;
  background-image:url('../../assets/logo.png');
  /* don't want the img to repeat itself */
  background-repeat: no-repeat;
  background-position: 100px 200px;
}
.p-box h1 {
  position: absolute;
  /* coming down 40px from top */
  top: 100px;
  left: 40px;
}
.p-box h2 {
  position: absolute;
  /* coming down 40px from top */
  top: 400px;
  right: 40px;
}
.fix-me {
  position: fixed;
  top: 400px;
}
/* pseudo-classes */
.my-list {
  list-style: none;
}
.my-list li:first-child {
  background-color: crimson;
}
.my-list li:nth-child(3) {
  background-color: green;
}
.my-list li:nth-child(even){
  background: grey;
}

</style>
