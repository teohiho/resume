User PowerShell

## 動作環境の準備

### Node.jsのインストール

* nvm for windowsをインストールする

https://github.com/coreybutler/nvm-windows/releases

任意のバージョン nvm-setup.zip をダウンロード。

解凍して「nvm-setup.exe」をダブルクリック、

インストーラーに従いインストール。

* 下記のコマンドでnvmがインストールされたことを確認する

nvm version

* 下記のコマンドで指定のバージョンをインストール

nvm install 14.17.1

* 下記のコマンドで指定のバージョンに切り替える

nvm use 14.17.1

* 下記のコマンドでバージョンを確認する

node -v

Create folder same example project (todolist_frontend)

>cd app/dev
Create package.json
>npm init
Create package-lock.json
>npm install

Create node_modules
Install to autorender in devDependencies (package.json)

>npm install --save-dev vue
>npm install --save-dev vue-loader
>npm install --save-dev @vue/compiler-sfc
>npm install --save-dev laravel-mix
>npm install --save-dev sass
>npm install --save-dev sass-loader
>npm install --save-dev resolve-url-loader

Create webpack.mix.js by hand
Copy and drag:
>>>>
const mix = require('laravel-mix');
 
mix
  .setPublicPath('../')
  .js('js/app.js', 'js')
  .sass('scss/app.scss', 'css')
  .vue({ version: 3 });
>>>>

In package.json, add text in script by hand
>>>>
"dev": "npm run development",
    "development": "mix",
    "watch": "mix watch",
    "watch-poll": "mix watch -- --watch-options-poll=1000",
    "hot": "mix watch --hot",
    "prod": "npm run production",
    "production": "mix --production"
>>>>

> npm run development

https://qiita.com/minato-naka/items/bfc3bbd9a388084e6f17
https://www.npmjs.com/package/sass