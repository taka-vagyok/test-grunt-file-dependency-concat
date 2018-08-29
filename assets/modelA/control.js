define("PRJ.TypeA.Control");
import("PRJ.TypeA.Model");

PRJ.TypeA.Control = function TypeAControl() {
  var name = "typeA-view";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
