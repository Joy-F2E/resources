# Componsition API

## Setup Function

1. 执行机制：`setup`选项在**组件创建之**前执行, 一旦`props`被解析，就将作为组合式API的入口
2. 避免使用`this`：在`setup`中要注意避免使用`this`，因为它不会找到组件实例。`setup` 的调用发生在 `data property`、`computed property` 或 `methods` 被解析之前，所以它们无法在 `setup` 中被获取。
3. 暴露返回内容：`setup`必须要`return`相关内容，暴露给组件的其余部分（计算属性、方法、声明周期钩子等）以及组件的模板

## Ref & Reactive

1. `Ref` 处理基础类型的数据（String、Number、Boolean、Null、Undefined、Symbol）

   ```javascript
   <template>{{ refValue }}</template>
   import { ref } from 'Vue'
   setup(props, context) {
      let refValue = ref('testValue') // proxy({ value: testValue })
      setTimeout(() => {
        refValue.value = 'testValue change'
      }, 2000)
      return { refValue }
   }
   ```

2. `Reactive` 处理复杂类型的数据（Array、Object）

    ```javascript
      <template>{{ reactiveObj }}</template>
      import { reactive } from 'Vue'
      setup(props, context) {
        const reactiveObj = { title: 'reactiveTitle' } // proxy({ title: 'reativeTitle' })
        setTimeout(() => {
          reactiveObj.title = 'reactiveTitle change'
        }, 2000)
        return { reactiveObj }
      }
    ```

3. 其他属性
   + `readonly` 只读属性
   + `toRefs` 要结合 `reactive`一起使用，实际就是将 `reactive` 中的属性再转换为 `ref`，这样对象内部的属性就变成响应式的了

## toRef & context参数

### toRef

> 转换为单个响应式引用

### context参数

> `context`参数有3个：`attrs`、`slots`、`emit`

## ref、toRef、toRefs的区别

+ toRef 指单个属性， toRefs 指一个对象
+ toRefs
+ ref

>文章参考：[ref、toRef、toRefs区别](https://www.jianshu.com/p/0c6ad50a9055)

# 第06章 Componsition API

1. setup 在 created 实例被完全初始化之前执行（在setup中不能使用 this）
2. setup最后必须要有一个return的值，导出后就可以在模版中使用了

## computed

> computed 实际就是将v2.6版本的computed方法变成了 `componsition api` 的一个函数  

1. `computed` 的简单使用

```javascript
  const { ref, computed } = Vue;
  setup(props) {
    const count = ref(0);
    const countAddFive = computed(() => {
      return count.value + 5;
    })
    return { count, countAddFive }
  }
```

2. `computed`中使用`get`和`set`

## watch

1. 具备一定的惰性
2. 参数可以拿到原始和当前值
3. 使用`rective`的引用的`watch`时，要使用一个箭头函数的形式来监听想要监听的内容

   ```javascript
    const { reactive, watch, toRefs } = Vue;
    setup() {
      const nameObj = reactive({ name: 'Joy' })
      watch(() => nameObj.name, (currentValue, prevValue) => {
        console.log(currentValue, prevValue);
      })
      const { name } = toRefs(nameObj);
      return { name }
    }
   ```

4. `watch` 侦听器还可以使用数组同时侦听多个源：

> 注意：多个同步更改只会触发一次侦听器
> 尝试检查深度嵌套对象或数组中的 property 变化时，仍然需要 deep 选项设置为 true。
> 侦听一个响应式对象或数组将始终返回该对象的当前值和上一个状态值的引用。为了完全侦听深度嵌套的对象和数组，可能需要对值进行深拷贝。

## watchEffect

> 文档链接: <https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E4%BE%A6%E5%90%AC%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AF%B9%E8%B1%A1>

1. `watchEffect` 是立即执行的，没有惰性，相当于 `immediate`
2. 不需要传递你要侦听的内容，会自动感知内部代码依赖
3. 不需要传递很多参数，只需要传递一个回调函数
4. `watchEffect` 只能获取到当前的值
5. 停止侦听
   > 当 `watchEffect`在组件的 setup() 函数或生命周期钩子被调用时，侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。在一些情况下，也可以显示调用返回值以停止侦听
   >
```javascript
  const watchEffectStop = watchEffect(() => {
    // TODO...
  })
  // 停止侦听
  watchEffectStop()
```

## 生命周期钩子

| 选项式API | Hook inside `setup` |
|---|---|
| beforeCreate    | not need          |
| created         | not need          |
| beforeMount     | onBeforeMounted   |
| mounted         | onMounted         |
| beforeUpdate    | onBeforeUpdate    |
| updated         | onUpdated         |
| beforeUnmount   | onBeforeUnmount   |
| unmounted       | onUnmounted       |
| errorCaptured   | onErrorCaptured   |
| renderTracked   | onRenderTracked   |
| renderTriggered | onRenderTriggered |
| activated       | onActivated       |
| deactivated     | onDeactivated     |
> 注：`activated` 和 `deactivated`，只有组件在被 `<keep-alive>` 包裹时，才会存在；  
> `onRenderTracked` 每次渲染后重新收集响应式依赖；  
> `onRenderTriggered` 每次触发页面重新渲染时自动执行。

+ 😄 xxx
