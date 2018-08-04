var
	gulp         = require("gulp"),
	livereload   = require("gulp-livereload"),
	sass         = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	cleancss     = require("gulp-clean-css"),
	rename       = require("gulp-rename");

gulp.task("reload-css", function() {
	gulp.src('./src/sass/style.scss')
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 3 version"],
			cascade: false
		}))
		.pipe(gulp.dest("./src/css/"))
		.pipe(cleancss({ compatibility: "ie8" }))
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest("./src/css/"))
		.pipe(livereload());
});

gulp.task("reload-html", function() {
	gulp.src('./src/*.html').pipe(livereload());
});

//gulp.task("reload-js", function() {
//gulp.src('./src/js/*.js').pipe(livereload());
//});

gulp.task("default", function() {
	livereload.listen();
	gulp.watch('./src/sass/*.scss', ['reload-css']);
	gulp.watch('./src/sass/blocks/*.scss', ['reload-css']);
	gulp.watch('./src/*.html', ['reload-html']);
	//gulp.watch('./src/js/*.js', ['reload-js']);
});﻿
