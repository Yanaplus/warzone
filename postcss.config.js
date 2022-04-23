module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    }),
    require('postcss-nesting'),
    require('postcss-import'),
    require('postcss-custom-media'),
  ],
};
