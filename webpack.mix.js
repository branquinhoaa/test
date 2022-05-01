let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/* 
mix function will receive 2 arguments: the first one is the file you write your code and the second one is where the compiled file will live 
*/

mix.sass('src/scss/custom.scss', 'assets').options({
  processCssUrls: false,
  postCss: [tailwindcss('tailwind.config.js')],
});
