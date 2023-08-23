const mix = require('laravel-mix');
 
mix
  .setPublicPath('../')
  .js('js/app.js', 'js')
  .sass('scss/app.scss', 'css')
  .vue({ version: 3 });