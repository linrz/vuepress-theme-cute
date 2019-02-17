---
title: 如何使用 vuepress-theme-cute
date: 2019-02-18
coffee: 1
spoiler: 快速上手
time: 4 min
author: linrz
---

## 使用 vuepress-theme-cute

> 依赖 vuepress@1.0.0-alpha.30 及其以上版本。

``` shell
$ npm install vuepress-theme-plain
```

vuepress-theme-plain 提供的配置项在`.vuepress/config.js` 配置中如下：
```js
module.exports = {
  theme: 'plain',
  themeConfig: {
    home: 'linrz.me',
    nav: {
      categories: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'About',
          link: '/about'
        },
        {
          text: 'About',
          link: '/about.html'
        }
      ]
    }
  }
}
```

## Page
对 `FrontMatter` 渲染了这些扩展字段 `date`, `coffee`, `spoiler`, `time`。

```markdown
---
date: 2019-01-06
coffee: 1
spoiler: 快速使用
time: 4 min
---
```

## Thanks
Thank you for the creator [`@Evan You`](https://github.com/yyx990803) and maintainer [`@ulivz`](https://github.com/ulivz) of [vuepress](https://github.com/vuejs/vuepress).
