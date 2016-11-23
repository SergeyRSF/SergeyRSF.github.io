var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	sass = require('gulp-sass'),
	//rename = require('gulp-rename'),
	notify = require('gulp-notify');
	/*concatCSS = require('gulp-concat-css'),
	minifyCSS = require('gulp-minify-css');*/


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"))
	.pipe(notify('Done!'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);


/*gulp.task('default', function () {
  return gulp.src('css/*.css')
  	//.pipe(concatCSS('style.min.css'))
  	.pipe(sass())
  	.pipe(minifyCSS())
  	//.pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done!'));
});

gulp.task('css', function () {
  return gulp.src('scss/style.scss')
  	.pipe(sass())
  	//.pipe(minifyCSS())
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function () {
  gulp.watch('css/*.css', ['css']);
});*/

//gulp.task('sass', function () {
//  gulp.src('./sass/**/*.scss')
//  	.pipe(sass())
//    .pipe(sass().on('error', sass.logError))
//    .pipe(sass({outputStyle: 'compressed'}))
//    .pipe(gulp.dest('./css'));
//});

//gulp.task('sass:watch', function () {
//  gulp.watch('./sass/**/*.scss', ['sass']);
//});



/*

gulp.task('serv', ['sass'], function() {
	browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload());
});

gulp.task('default', ['serv']);


gulp.task('hello', function() {
	console.log('Hello world');
});

gulp.task('sass', function(){
  gulp.src('./scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./css'))
});*/