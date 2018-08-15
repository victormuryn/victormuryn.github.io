var
	gulp = require("gulp"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber"),
	postcss = require("gulp-postcss"),
	csscomb = require("gulp-csscomb"),
	autoprefixer = require("autoprefixer"),
	minify = require("gulp-csso"),
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp"),
	server = require("browser-sync").create(),
	rename = require("gulp-rename");

gulp.task("style", function() {
	gulp.src("src/sass/style.scss")
		.pipe(plumber())
		.pipe(sass().on("error", sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(csscomb())
		.pipe(gulp.dest("src/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("src/css"))
		.pipe(server.stream());
});

gulp.task("images", function() {
	return gulp.src("src/img/**/*.{png,jpg,svg}")
		.pipe(imagemin([imagemin.optipng({ optimizationLevel: 3 }),
			imagemin.jpegtran({ progressive: true }),
			imagemin.svgo()
		]))
		.pipe(gulp.dest("src/img"))
		.pipe(server.stream());
});

gulp.task("webp", function() {
	return gulp.src("src/img/**/*.{png,jpg}")
		.pipe(webp({ quality: 90 }))
		.pipe(gulp.dest("src/img"))
		.pipe(server.stream());
});

gulp.task("default", ["style"], function() {
	server.init({
		server: "src/"
	});

	gulp.watch("src/sass/**/*.scss", ["style"]);
	gulp.watch("src/*.html").on("change", server.reload);
	gulp.watch("src/js/*.js").on("change", server.reload);
	/* gulp.watch("src/img/*.{png,jpg}", ["webp"]);
	 gulp.watch("src/img/*.{png,jpg,svg}", ["images"]); */
});
