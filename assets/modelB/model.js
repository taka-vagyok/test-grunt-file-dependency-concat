require("PRJ");
define("PRJ.TypeB.Model");
PRJ.TypeB = {};
PRJ.TypeB.Model = function TypeBModel() {
  var name = "typeB-model";
  for (var i = 0; i < 10; i++) {
    console.log(name + i);
  }
};
