// JS
module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src("app/js/main.js")
        .pipe(plugins.plumber())
		.pipe(plugins.using({ prefix: 'After changed:', color:'green', filesize:true }))

		// Include
		.pipe(plugins.include())

		// Dest
		.pipe(gulp.dest("dist/js/"))

		// Uglify
		.pipe(plugins.uglify())
		.pipe(plugins.rename({suffix: ".min"}))
		.pipe(gulp.dest("dist/js"))
        .pipe(plugins.browserSync.reload({stream:true}));
    };
};
