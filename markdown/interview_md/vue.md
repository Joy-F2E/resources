# 【专项】Vue

## 一. Vue组件通信
> vue组件通信方式及代码实现：包括但不限于父子组件通信/隔代组件通信/兄弟组件通信
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

### 父子/兄弟/隔代组件
  1. `EventBus`  
    如何使用`EventBus`进行组件通信？  
    文章参考：https://zhuanlan.zhihu.com/p/72777951

  2. `Vuex` 
  3. `本地缓存, eg: localStorage`