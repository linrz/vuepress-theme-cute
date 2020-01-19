---
title: 如何使用 vuepress-theme-cute
date: 2019-02-18
coffee: 1
spoiler: 快速上手
time: 4 min
author: linrz
---

## 使用 vuepress-theme-cute

vuepress-theme-cute 是一个博客主题，追求极简风格，功能最小可用。

``` shell
$ npm install vuepress-theme-cute
```

vuepress-theme-cute 提供的配置项在`.vuepress/config.js` 配置中如下：
```js
module.exports = {
  theme: 'cute',
  themeConfig: {
    home: 'linrz.me',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    sharePlatforms: ['weibo', 'twitter', 'wechat', 'download']
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
