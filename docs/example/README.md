---
title: 範例頁面
cover: https://i.imgur.com/oBxDoND.png
---

# 範例頁面

## 重點強調

這是一段<mark>閃閃亮亮</mark>的文字

```
<mark>閃閃亮亮</mark>的文字
```

## 按鍵說明

<kbd>Enter</kbd>

```
<kbd>Enter</kbd>
```

## Vue.js

### 一般語法

One plus one equals: {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

```
One plus one equals: {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>
```

### 自訂組件

<Macbook />

```
<Macbook />
```

## 名詞縮寫

The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

```
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```

## 繪文字（Emoji）

唷唷唷唷 :tada: !

```
唷唷唷唷 :tada: !
```

## 插入目錄

[[toc]]

```
[[toc]]
```

## 上標下標

- 上標：2^1024^
- 下標：H~2~0

```
- 上標：2^1024^
- 下標：H~2~0
```

## 腳註區塊

無論哪一行、哪一界，多是自吹自擂，自欺自騙。日子長了，連自己也信以為真了，而大禍至矣。因為沒有做任何真正的事，沒有建任何真正的功，自然而然不會有謝天的感覺。[^1]

[^1]: 這句話摘錄自陳之藩著作《在春風裏》中的《謝天》一文

```
無論哪一行、哪一界，多是自吹自擂，自欺自騙。日子長了，連自己也信以為真了，而大禍至矣。因為沒有做任何真正的事，沒有建任何真正的功，自然而然不會有謝天的感覺。[^1]

[^1]: 這句話摘錄自陳之藩著作《在春風裏》中的《謝天》一文
```

## 自訂容器

### 說明容器

::: tip 說明
說明訊息
:::

```
::: tip 說明
說明訊息
:::
```

### 注意容器

::: warning 注意
注意訊息
:::

```
::: warning 注意
注意訊息
:::
```

### 警告容器

::: danger 警告
警告訊息
:::

```
::: danger 警告
警告訊息
:::
```

### 引言容器

::: reference 《雅量》
朋友買了一件衣料，綠色的底子帶白色方格，當她拿給我們看時，一位對圍棋十分感與趣的同學說：

「啊，好像棋盤似的。」

「我看倒有點像稿紙。」我說。

「真像一塊塊綠豆糕。」一位外號叫「大食客」的同學緊接著說。

我們不禁哄堂大笑，同樣的一件衣料，每個人卻有不同的感覺。那位朋友連忙把衣料用紙包好，她覺得衣料就是衣料，不是棋盤，也不是稿紙，更不是綠豆糕。人人的欣賞觀點不盡相同，那是和個人的性格與生活環境有關。

—— 宋晶宜
:::

```
::: reference 《雅量》
朋友買了一件衣料，綠色的底子帶白色方格，當她拿給我們看時，一位對圍棋十分感與趣的同學說：

「啊，好像棋盤似的。」

「我看倒有點像稿紙。」我說。

「真像一塊塊綠豆糕。」一位外號叫「大食客」的同學緊接著說。

我們不禁哄堂大笑，同樣的一件衣料，每個人卻有不同的感覺。那位朋友連忙把衣料用紙包好，她覺得衣料就是衣料，不是棋盤，也不是稿紙，更不是綠豆糕。人人的欣賞觀點不盡相同，那是和個人的性格與生活環境有關。

—— 宋晶宜
:::
```

### 摺疊容器

::: details 展開內容
內容
:::

```
::: details 展開內容
內容
:::
```

## 數學公式

### 行內公式

If $g$ is a continuous function $g(x)$ in $[a, b]$ for all $x$ in $[a,b]$, then $g$ has a fixed point in $[a, b]$.

### 行間公式

$$
i\hbar\frac{\partial \psi}{\partial t} = \frac{-\hbar^2}{2m} ( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} ) \psi + V \psi.
$$

## 內建插件

### CodePen Snippet

<CodePenSnippet title='Sunrise over still lake' slug='yLVeLNg' user='pehaa' />

```
<CodePenSnippet title='Sunrise over still lake' slug='yLVeLNg' user='pehaa' />
```