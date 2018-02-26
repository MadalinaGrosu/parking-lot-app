module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: ["dist/"]
        },
        jshint: {
            all: ['Gruntfile.js', 'app/js/*.js', 'test/*.js']
        },
        concat: {
            dist: {
                src: ["app/js/*.js"],
                dest: "dist/js/scripts.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask("default", ["clean", "jshint", "concat"]);
};