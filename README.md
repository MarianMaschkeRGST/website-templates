# SCSS 小型webサイト作成用テンプレート・開発環境
こちらのプロジェクトはDART SASSを使っています。古いRUBY SASSと非互換性があるのでご注意下さい。
＠useと＠forwardはRUBY SASSで動かないです。
RUBY SASSは2019年から開発チームからネグレクト(depreciated)になりましたので、続きましてプロジェクトに使えずおすすめしたいと思います。

//　DART SASSは自動的にWATCHするので、Watch Sassボタン押すことが必要ありません。

## Setup

このプロジェクトテンプレートはnodeのVENV使っています。利用場合はnode version７以上をダウンロードしてください。

```確認方法・ターミナル
npm -v
```
[NODEをダウンロードする](https://nodejs.org/en/download/)

必要なSASS versionはpackage.json/package-lock.json/node_modules/srcに設定されました。
データ消さないでください。

プロジェクトにSASSの設定は必要がありませんですが、グローバルでインストールしたことが必要です。
```SASS install global
npm install -g sass
```

```Change directory to save css code to
 sass --watch src/scss:ターゲットフォルダ名/css
```

## 利用方法　・　How to use
ページ作成の開発環境です。お客様へ渡す場合はindex.html,viewsフォルダーと
assetsフォルダーのみにしてください！

ライブページはSCSS,package.json, node_modulesなどが必要ありません。

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Created by 株式会社　レジスタ

[README Tutorial](https://www.makeareadme.com/)
