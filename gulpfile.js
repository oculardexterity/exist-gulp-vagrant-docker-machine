const gulp = require('gulp4'),
    exist = require('gulp-exist'),
    //sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    newer = require('gulp-newer');


// EDIT THIS!
const config ={
    app_path: "/db/apps/myapp"
}

const exist_connection = {
	basic_auth: {
		user: "admin",
		pass: ""
    }
}

const existClient = exist.createClient(exist_connection);

// compile SCSS styles and put them into 'build/app/css'
gulp.task('styles', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/app/css'));
});

// copy html templates, XMLs and XQuerys to 'build'
gulp.task('copy', function() {
    return gulp.src('app/**/*.{xml,html,xql,xqm,xsl,rng}')
            .pipe(newer('build'))
            .pipe(gulp.dest('build'))
});


gulp.task('deploy',  function() {
    return gulp.src('build/**/*', {base: 'build'})
        .pipe(existClient.newer({target: config.app_path}))
        .pipe(existClient.dest({target: config.app_path}));
});

gulp.task('watch-styles', function() {
    //gulp.watch('app/scss/**/*.scss', gulp.series('styles'))
});

gulp.task('watch-copy', function() {
    gulp.watch([
                'app/js/**/*',
                'app/imgs/**/*',
                'app/**/*.{xml,html,xql,xqm,xsl}'
                ],  
                gulp.series('copy'));
});

gulp.task('watch-deploy', function() {
    gulp.watch('build/**/*', gulp.series('deploy'));
});

gulp.task('watch', gulp.parallel('watch-copy', 'watch-deploy'));