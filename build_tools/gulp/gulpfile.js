var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');
var del = require('del');

// Log
gulp.task('log', ['foo', 'bar']);

gulp.task('foo', function () {
    console.log("Foo");
});

gulp.task('bar', function () {
    console.log("Bar");
});

// Clean
gulp.task('clean', function () {
   del(['app/js/bundle.js', 'build/*']);
});

// Lint
gulp.task('lint', function() {
  return gulp.src('./app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Optimize
gulp.task('concat', function() {
  return gulp.src('./app/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('compress', ['concat'], function (cb) {
  pump([
        gulp.src('./app/js/bundle.js'),
        uglify(),
        gulp.dest('build')
    ],
    cb
  );
});
