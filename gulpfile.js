'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');
var browserify = require('browserify');
var babelify = require('babelify');
var source     = require('vinyl-source-stream');
var jade = require('gulp-jade');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var Server = require('karma').Server;

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', errorHandler))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(rimraf().on('error', errorHandler));
});

gulp.task('fonts', function() {
   return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**/*.{ttf,woff,woff2,eof,svg}')
   .pipe(gulp.dest('./build/fonts/bootstrap'));
});

gulp.task('jshint', function () {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

gulp.task('scripts', function() {
  return browserify({ entries: ['./src/main.js'] })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js').on('error', errorHandler))
    .pipe(gulp.dest('build'));
});

gulp.task('vendor', function() {
  return browserify({ entries: ['./src/vendor.js'] })
    .bundle()
    .pipe(source('vendor.js').on('error', errorHandler))
    .pipe(gulp.dest('build'));
});

gulp.task('templates', function() {
  gulp.src('src/**/*.jade')
    .pipe(jade().on('error', errorHandler))
    .pipe(gulp.dest('build'))
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function() {
    done();
    }).start();
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.js', ['scripts']);
  gulp.watch('src/**/*.jade', ['templates']);
});

gulp.task('default', function () {
  runSequence(
    'clean',
    'test',
    'fonts',
    ['connect', 'sass', 'jshint', 'scripts', 'vendor', 'templates', 'watch']
  );
});
gulp.task('build', function () {
  runSequence(
    'clean',
    'test',
    'fonts',
    ['sass', 'scripts', 'vendor', 'templates']
  );
});

// Handle the error
function errorHandler (error) {
  console.log('my error', error.message);
  this.emit('end');
}
