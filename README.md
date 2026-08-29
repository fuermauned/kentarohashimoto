# Film Portfolio v1

初回公開用の静的実装です。Reactは使わず、HTML / CSS / JavaScriptのみで構成しています。

## ローカル確認

```bash
python3 -m http.server 4173
```

ブラウザで `http://localhost:4173/film-portfolio-v1/` を開きます。

## 反映済み

- Aboutの意志表明・略歴
- 4作品の作品解説
- 作品別ギャラリー画像（WebPへ軽量化）
- 白背景、ロゴのfavicon、SNS用代表画像指定
- Formspree送信先
- Vimeo、メールリンク
- Illustrator元データから変換した透明背景ロゴ

## 公開前に残る確認

- `INVERTED INVERSION` の `scene03` が必要なら画像を追加
- リール動画を直接配信するかVimeo埋め込みにするか実機で決定
- GitHub Pagesの公開URL決定後、OG画像URLを絶対URLへ変更
- Formspreeの実送信テスト

ページ遷移はGitHub Pagesで404を避けるためHash URLを使用しています。
