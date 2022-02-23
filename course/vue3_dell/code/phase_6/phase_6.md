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

### context参数

> `context`参数有3个：`attrs`、`slots`、`emit`

## ref、toRef、toRefs的区别

+ toRef 指单个属性， toRefs 指一个对象
文章参考：[ref、toRef、toRefs区别](https://www.jianshu.com/p/0c6ad50a9055)
