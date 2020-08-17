var gulp     = require('gulp');
var watch  = require('gulp-watch');
var concat   = require('gulp-concat');
var terser = require('gulp-terser');
var rename   = require('gulp-rename');

// Source Path
var js_src   = "./src/javascript/*.js";

// Dist Path
var js_dist  = "./js/";
var js_dist_name = "script.js";

// Minify e Concat Scripts
gulp.task('scripts', function() {
	return gulp.src(js_src)
		.pipe(concat(js_dist_name))
		.pipe(terser())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(js_dist));
});

// Watch
gulp.task('watch', function() {
	gulp.watch([js_src], ['scripts']);
});


