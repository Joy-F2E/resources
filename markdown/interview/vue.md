# Vue

## 1.组件通信

> vue 组件通信方式及代码实现：包括但不限于父子组件通信/隔代组件通信/兄弟组件通信
>
> Vue 通信的几种方式：
>
> + Props
> + Emit
> + Provide/inject
> + Vuex
> + EventBus
> + $parent/$children（vue3移除$children，访问子组件实例建议使用$refs）
> + $attrs/$listeners（vue3已移除listeners）
> + 本地缓存

### 父子组件通信

  1. 父向子（parent -> child）：`props`

```javascript
  // parent.vue
  <parent>
    <child v-bind:attr-value="attrValue"></child>
  </parent>

  // child.vue
  const child = {
    props: ['attrValue']
  }
```

  2. 子向父（child -> parent）：`$emit`

```typescript
  // parent.vue
  <parent>
    <child v-bind:attr-value="attrValue" @attr-value-change="handleAttrValueChange"></child>
  </parent>

  const child = {
    props: ['attrValue'],
    emits: ['attrValueChange'],
    methods: {
      handleClick() {
        this.$emit('attrValueChange', param);
      }
    }
  }
```

  3. 双向绑定（v-model, 特殊情况，实际仍然属于 `props` ）：`v-model`
  4. `$parent` 和 `$children`

### 隔代组件通信

  1. `provide` 和 `inject`
  2. `$attrs` 与 `$listeners`  
      如何使用 `$attrs` 与 `$listeners` 进行组件通信？

   > `$listeners`对象在Vue3中已被移除。事件监听器现在是`$attrs`的一部分
   > `$attrs` 针对 non-props 属性

### 父子/兄弟/隔代组件

  1. `EventBus`  

    如何使用`EventBus`进行组件通信？  
    文章参考：<https://zhuanlan.zhihu.com/p/72777951>

  2. `Vuex`
  3. `本地缓存, eg: localStorage`

## 2.Vue的优缺点

### 优点

+ 创建单页面应用的轻量级web应用框架
+ 简单易用
+ 双向数据绑定  ->  `双向绑定原理`
+ 组件化的思想
+ 虚拟DOM  ->  `虚拟DOM的原理`，`diff算法`
+ 数据驱动视图  ->  `MVVM理解`

### 缺点

+ 不支持IE8

## 3.SPA的理解

SPA：single page application（单页应用）。在web页面初始化时一同加载html/css/javascript文件，一旦加载完成，不会因为用户的操作而进行页面的重新加载或跳转，而是根据路由机制实现html内容的替换

> 1. 同时加载html/css/javascript
> 2. 页面内容由路由决定

### 优点

+ 良好的用户体验，内容更改无需重载页面
+ 对服务端的压力更小
+ 前后端职责分离，架构清晰

### 缺点

> 耗时    不利于SEO   不支持前进后退（前进后退由路由机制解决）

+ 单页面应用，在渲染页面的同时请求css/js，更加耗时

+ 由于前端渲染，搜索引擎不会解析 js，只能爬取首页未渲染的模版，不利于SEO

+ 需要在一个页面显示所有内容，默认不支持浏览器的前进后退  

  注：无法前进后退由`前端路由机制`解决：

  + `Hash模式`： hash的变化会被浏览器记录（onhashchange事件）
  + `History模式`：利用H5新增的 `pushState`和`replaceState`来改变浏览器的历史记录栈

## 4.Vue2与Vue3的区别

### Vue3优点

+ 更强的性能，更好的 `tree shaking`
+ `Componsition API` + `setup`
+ 更好地支持 `TypeScript`

### Vue2优点

+ 响应式书记
+ `Options API`
+ `SFC`

### 区别

文章参考：[掘金-梳理Vue3相比于Vue2有哪些“与众不同”](https://juejin.cn/post/7011372376969445413)

+ 生命周期变化

  > 名称：vue3 的生命周期钩子前需要加上 `on`
  >
  > 使用：vue3 `Componsition API` 需要先引入再使用；vue2 `Options API`可直接调用
  >
  > 定义：`setup`是围绕 `beforeCreate`和`created`生命周期钩子运行的，所以不需要显示定义

+ Vue3 多根节点

+ 异步组件使用不同

+ 
