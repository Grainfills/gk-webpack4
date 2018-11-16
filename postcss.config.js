module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['android > 4']
        }),
         require('cssnano')({
            reduceIdents: false
        }),
        require('postcss-px-to-viewport')({
                viewportWidth: 750,
                viewportHeight: 1334,
                unitPrecision: 5,
                viewportUnit: 'vw',
                selectorBlackList: [],
                minPixelValue: 1,
            }
        )
    ],
    mediaQuery: false
};