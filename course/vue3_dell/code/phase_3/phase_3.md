# 第03章 探索组件理念

## Non-Props

+ non-props: 非props接收的属性
  使用 `innheritAttrs` 禁用 attribute 继承

## 父子组件传值

+ 使用 `emits: {}` 对象，将为事件分配一个函数，可以验证抛出的事件

+ `实现 v-model 指令`，组件上的 `v-model` 使用 `modelValue` 作为Prp和 `update:modelValue` 作为事件
+ `modelValue` 名称可以使用 `v-model` 传递参数来修改
+ `v-model` 可以实现多个绑定
+ `v-model` 可以添加自定义指令

```javascript
  // parent.vue
  <my-component v-model.capitalize="myText"></my-conponent>
 
  // child.vue
  const MyComponent = {
    props: {
      modelValue: String,
      modelModifiers: {
        default: () => ({})
      }
    },
    emits: ['update:modelValue'],
    method: {
      handleClick() {
        let value = this.modelValue;
        if (this.modelModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.splice(1);
        }
        this.$emit('update:modelValue', value);
      }
    }
  }
  
```

## 插槽

### slot中使用的数据，作用域的问题

+ 父模板里调用的数据属性，使用的都是父模板里的数据
+ 子模板里调用的数据属性，使用的都是子模板里的数据

### 具名插槽

+ 在向具名插槽提供内容的时候，可以在一个 `<template>` 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称

+ `v-slot` 只能添加在 `<template>` 上

### 作用域插槽

  解决了子组件渲染的内容要由父组件决定

## 动态组件 & 异步组件

### 动态组件

+ 根据数据的变化，结合`componment`标签，使用 `is` attribute 来动态切换不同的组件；
+ 同步组件与异步组件区别（同步组件使用居多）
+ `Vue.defineAsyncComponent()`
