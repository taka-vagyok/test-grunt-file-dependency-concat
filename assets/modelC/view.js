// type A view
require("PRJ.TypeC.Model");
define("PRJ.TypeC.View");
PRJ.TypeC.View = function TypeCView() {
  var name = "typeC-view";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
