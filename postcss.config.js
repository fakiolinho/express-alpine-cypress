const plugins = [require('tailwindcss'), require('autoprefixer')];

module.exports = (ctx) => ({
  plugins:
    ctx.env === 'production' ? [...plugins, require('cssnano')()] : plugins,
});
