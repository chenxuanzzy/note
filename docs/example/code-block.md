# 程式區塊

## 一般區塊

``` python
print("Hello World!")
```

## 段落上色

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: 'Hello, VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

## 標籤區塊

:::: code-group
::: code-group-item TS

```ts
const user: object = {}
```

:::
::: code-group-item JS

```js
const user = {}
```

:::
::::

## 引入檔案

@[code](./code/hello-world.cpp)

```
@[code](./code/hello-world.cpp)
```