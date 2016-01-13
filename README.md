# What is this?

This is an example for detecting when loading the font is completed using Adobe Blank.

# How to detect it?

1. Prepare the font which width is 0, [Adobe Blank](https://github.com/adobe-fonts/adobe-blank).
2. Render a character with the font. (Now its width is 0.)
3. Apply the font you'd load to the character.
4. Monitor the character's width.
5. If its width is not 0, the target font was loaded. Yeah!

---

# なにこれ

フォント読み込み完了を検知する例です。

# どうやってるの

1. 幅が0のフォントを用意します。（[Adobe Blank](https://github.com/adobe-fonts/adobe-blank)）
2. そのフォントを使って文字を描画します。（このとき文字の幅は0です。）
3. 読み込むフォントをその文字に適用します。
4. 文字の幅を監視します。
5. 文字の幅が0でなければ、目的のフォントは読み込まれました。やったぜ。
