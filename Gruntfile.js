module.exports = function(grunt) {
  var obj_dir = "___obj___";
  var pkg_dir = "___pkg___";
  var js_src = "assets";
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    file_dependencies: {
      assets: {
        options: {
          extractDefineRegex: /(?:(?:define)|(?:export))\s*\(\s*['"]([^'"]+)['"]/g,
          extractRequiresRegex: /(?:(?:require)|(?:import))\s*\(\s*['"]([^'"]+)['"]/g
        },
        src: [js_src + "/**/*.js"]
      }
    },
    concat: {
      test: {
        options: {
          process: function(src, filepath) {
            return (
              "// Src: " +
              filepath +
              "\n" +
              // 依存関係用のコマンドは無効化。ガチのimportなどが使えなくなる
              src
                .replace(/(?:define|export)\s*\((.+)\)\s*;/g, "// Def: $1")
                .replace(/(?:import|require)\s*\((.+)\)\s*;/g, "// Req: $1")
            );
          }
        },
        src: ["<%= file_dependencies.assets.ordered_files %>"],
        dest: pkg_dir + "/main.js"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-file-dependencies");

  grunt.registerTask("test", ["file_dependencies:assets", "concat:test"]);
};
