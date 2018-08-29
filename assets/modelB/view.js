// type B view
require("PRJ.TypeB.Model");
define("PRJ.TypeB.View");
PRJ.TypeB.View = function TypeBView() {
  var name = "typeA-view";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
