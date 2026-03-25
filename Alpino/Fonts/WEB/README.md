# Installing Webfonts
Follow these simple Steps.

## 1.
Put `alpino/` Folder into a Folder called `fonts/`.

## 2.
Put `alpino.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `alpino.css` depends on your Website Filesystem.

## 4.
Import `alpino.css` at the top of you main Stylesheet.

```
@import url('alpino.css');
```

## 5.
You are now ready to use the following Rule in your CSS to specify the Font Style:
```
font-family: Alpino-Variable;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 900.0

Available axes:
'wght' (range from 100.0 to 900.0

