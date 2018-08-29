// type A view
require("PRJ.Main.Model");
define("PRJ.Main.View");

PRJ.Main.View = function MainView() {
  var name = "Main-view";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
