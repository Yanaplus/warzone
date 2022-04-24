module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions'],
    }),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-calc'),
  ],
};
