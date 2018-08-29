// type A view
require("PRJ.TypeA.Model");
define("PRJ.TypeA.View");
PRJ.TypeA.View = function TypeAView() {
  var name = "typeA-view";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
