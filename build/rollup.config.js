const uglify = require('rollup-plugin-uglify');

module.exports = {
    input: 'src/index.js',
    name: 'sfax',
    output: {
        file: 'dist/sfax.js',
        format: 'umd'
    },
    plugins: [
        uglify({
            // mangle: false,
            ie8: true
        })
    ]
};
