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
4. `watch` 可以侦听多个数据的变化，用一个侦听器承载