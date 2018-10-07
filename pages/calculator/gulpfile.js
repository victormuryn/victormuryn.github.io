/***************************************************\
|              Required all plugins                 |
\***************************************************/
const
	del = require("del"),
	gulp = require("gulp"),
	minify = require("gulp-csso"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	run = require("run-sequence"),
	plumber = require("gulp-plumber"),
	postcss = require("gulp-postcss"),
	htmlmin = require('gulp-htmlmin'),
	csscomb = require("gulp-csscomb"),
	autoprefixer = require("autoprefixer"),
	server = require("browser-sync").create();
/***************************************************\
|                    Gulp style                     |
\***************************************************/
gulp.task("style", function() {
	gulp.src("src/sass/style.scss")
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(csscomb())
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(server.stream());
});

/***************************************************\
|                   Gulp script                     |
\***************************************************/
gulp.task("script", function() {
	gulp.src("src/js/script.js")
		.pipe(gulp.dest("build/js"))
		.pipe(server.stream());
});

/***************************************************\
|                    Gulp html                      |
\***************************************************/
gulp.task("html", function() {
	return gulp.src("src/*.html")
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest("build"))
		.pipe(server.stream());;
});

/***************************************************\
|           Gulp copy all to build                  |
\***************************************************/
gulp.task("copy", function() {
	return gulp.src([
			"src/fonts/**/*.{woff,woff2}",
			"src/img/**",
		], {
			base: "src"
		})
		.pipe(gulp.dest("build"));
});

/***************************************************\
|                 Gulp clean build                  |
\***************************************************/
gulp.task("clean", function() {
	return del("build");
});

/***************************************************\
|                    Gulp BUILD                     |
\***************************************************/
gulp.task("build", function(done) {
	run(
		"clean",
		"copy",
		"style",
		"script",
		"html",
		done
	);
});

/***************************************************\
|                    Gulp SERVER                     |
\***************************************************/
gulp.task("serve", function() {
	server.init({
		server: "build/"
	});

	gulp.watch("src/sass/**/*.scss", ["style"]);
	gulp.watch("src/*.html", ["html"]);
	gulp.watch("src/js/**/*.js", ["script"]);
});
