module.exports = function(grunt) {
    grunt.initConfig({
      ts: {
        default : {
            files: [{ src: ['src/*.ts'], dest: 'dist' }],
            tsconfig: './tsconfig.json',
            watch:"."
        }
      }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
  };