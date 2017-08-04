// Sunc Img
module.exports = function (gulp, plugins) {
    return function () {

        plugins.dirSync('app/media/img/', 'dist/img')
        .on('error', function(err) {
            plugins.notify().write(err);
            this.emit('end');
        });

    };
};
