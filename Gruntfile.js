module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            dist: ["dist/"]
        },
        jshint: {
            all: ['Gruntfile.js', 'app/js/*.js', 'test/*.js']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", ["clean", "jshint"]);
};