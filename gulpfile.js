const gulp = require('gulp');
      sass = require('gulp-sass');

const paths = {
    css : {
        src: ['node_modules/bulma/bulma.sass','src/scss/index.scss'],
        dest: 'build/assets/css'
    }
}

function css(){
    return gulp.src(paths.css.src)

    .pipe(sass())

    .pipe(gulp.dest(paths.css.dest))
}

exports.css = css;