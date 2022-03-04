
# 01 - JavaScript Drum Kit

## Demo

[01 - JavaScript Drum Kit](https://chenxuanzzy.github.io/JavaScript-30/01%20-%20JavaScript%20Drum%20Kit/index-START.html)

## 簡介

在網頁上按下鍵盤時會發出聲音和效果

## 程式
[GitHub](https://github.com/chenxuanzzy/JavaScript-30/tree/main/01%20-%20JavaScript%20Drum%20Kit)
```js
    <script>
      (function () {
        window.addEventListener("keydown", playHandler);

        function playHandler(e) {
          const audio = document.querySelector(
            `audio[data-key="${e.keyCode}"]`
          );
          if (audio) {
            audio.currentTime = 0;
            audio.play();
          }

          const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
          if (dom) dom.classList.add("playing");
        }

        document.querySelectorAll(".key").forEach((key) => {
          key.addEventListener("transitionend", transitionedHandler);
        });
        function transitionedHandler(e) {
          if (e.propertyName === "transform") {
            e.target.classList.remove("playing");
          }
        }
      })();
    </script>
```
## 作法


- 利用 ```window.addEventListener``` 去監聽出發鍵盤
  - [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) 事件按下後觸發
  - [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event) 按著不放連續觸發
  - [比較 keydown, keypress, keyup 的差異](https://medium.com/@yitailin/%E6%AF%94%E8%BC%83-keydown-keypress-keyup-%E7%9A%84%E5%B7%AE%E7%95%B0-4e873ba17e81)

- 監聽函式內去抓```audio``` 和 ```div```的```data-key```的 keyCode 後新增聲音和 css 樣式
  - ES6 寫法 [template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
  - 需要注意的是 audio 設定 [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime) = 0，讓他有一個停留，不設置則會有連續不停的聲音
- 按下後立即移除 css 樣式
  - 取得所有的 .key 後動態移除 css
  - [TransitionEvent.propertyName](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/propertyName)

