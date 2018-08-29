require("PRJ");
define("PRJ.TypeA.Model");
PRJ.TypeA = {};
PRJ.TypeA.Model = function TypeAModel() {
  var name = "typeA-model";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
