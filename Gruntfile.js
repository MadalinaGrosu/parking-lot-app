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
        },
        uglify: {
            dist : {
                src: ["dist/js/scripts.js"],
                dest: "dist/js/scripts.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["clean", "jshint", "concat", "uglify"]);
};