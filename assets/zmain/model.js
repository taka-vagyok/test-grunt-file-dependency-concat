define("PRJ");
define("PRJ.Main.Model");

var PRJ = {};
PRJ.Main = {};
PRJ.Main.Model = function MainModel() {
  var name = "main-model";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
