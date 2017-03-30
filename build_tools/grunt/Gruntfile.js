module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Clean
    clean: ['app/js/bundle.js', 'build/*'],
    // Lint
    jshint: {
      all: ['Gruntfile.js', 'app/js/*.js']
    },
    // Concatenate
    concat: {
      dist: {
        src: ['app/js/foo.js', 'app/js/bar.js'],
        dest: 'app/js/bundle.js',
      }
    },
    // Compress
    uglify: {
      bundle: {
        files: {
          'build/bundle.min.js': ['app/js/bundle.js']
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Log
  grunt.registerTask('default', 'Log', ['foo', 'bar']);

  grunt.registerTask('foo', function () {
    grunt.log.write('Foo');
  });

  grunt.registerTask('bar', function () {
    grunt.log.write('Bar');
  });

  // Optimize
  grunt.registerTask('optimize', ['concat', 'uglify']);

};
