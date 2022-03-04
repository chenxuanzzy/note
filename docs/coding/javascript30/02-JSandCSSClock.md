
# 02 - JS and CSS Clock

## Demo

[02 - JS and CSS Clock](https://chenxuanzzy.github.io/JavaScript-30/02%20-%20JS%20and%20CSS%20Clock/index-START.html)

## 簡介

利用 CSS transition 效果和 JS 動態讓時鐘轉動

## 程式
[GitHub](https://github.com/chenxuanzzy/JavaScript-30/tree/main/02%20-%20JS%20and%20CSS%20Clock)
```css
    .hand {
      width: 50%;
      height: 6px;
      background: black;
      position: absolute;
      top: 50%;
      transform-origin: 100%;
      transform: rotate(90deg);
      transition: all 0.05s;
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1)
    }
```

```js
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate(){
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      
      const mins = now.getMinutes();
      const minsDegrees = (((mins / 60) * 360) + 90);
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (((hour / 12) * 360) + 90);
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    setInterval(setDate, 1000)
```
## 作法

- 先將指針利用 CSS transition 設置剛好指向 12 點鐘，以便 JS 好操作
    - [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin) 設定元素變化的原點
    - [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform) 元素可以被平移、旋轉、縮放和傾斜
    - [transition-timing-function](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-timing-function) 動畫
- 獲取基本的時、分、秒
    - `getHours()`、`getMinutes()`、`getSeconds()`
- 計算角度後放入 css 中
    - [style.transform](https://www.runoob.com/jsref/prop-style-transform.html)