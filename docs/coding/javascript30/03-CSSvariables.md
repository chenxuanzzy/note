# 02 - JS and CSS Clock

## Demo

[03 - CSS Variables]()

## 簡介

利用 CSS Variables 操作圖片霧化和外框大小及顏色

## 程式

[GitHub](https://github.com/chenxuanzzy/JavaScript-30/tree/main/02%20-%20JS%20and%20CSS%20Clock)

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

```js
(function () {
  const inputs = document.querySelectorAll(".controls input");

  function changeHandler() {
    document.documentElement.style.setProperty(
      "--" + this.name,
      this.value + (this.dataset.sizing || "")
    );
  }

  inputs.forEach((input) => {
    input.addEventListener("change", changeHandler);
    input.addEventListener("mousemove", changeHandler);
  });
})();
```

## 作法

CSS Variables 現今比較少用是因為有相容性問題

:root = html （全局選取器 ）

- 先將指針利用 CSS transition 設置剛好指向 12 點鐘，以便 JS 好操作
  - [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin) 設定元素變化的原點
  - [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform) 元素可以被平移、旋轉、縮放和傾斜
  - [transition-timing-function](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-timing-function) 動畫
- 獲取基本的時、分、秒
  - `getHours()`、`getMinutes()`、`getSeconds()`
- 計算角度後放入 css 中
  - [style.transform](https://www.runoob.com/jsref/prop-style-transform.html)
