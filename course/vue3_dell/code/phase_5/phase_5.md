# 第05章 Vue高级语法

## Mixin

+ 组件 data, methods 优先级高于minxin data, method优先级
+ 生命周期函数先执行 mixin中的，再执行组件内部的
+ 自定义属性，组件中的属性优先级高于 mixin中的属性（自定义属性可以使用 `this.$options.xx`获取）
+ 自定义选项合并策略 `app.config.optionMergeStrategies`

```javascript
  // 自定义属性优先级修改
  app.config.optionMergeStrategies.xx = (minxinValue, appValue) => {
    return minxinValue || appValue
  }
```

---

## 自定义指令

+ 自定义指令可以是全局的也可以是局部的
+ 自定义指令可以传递参数

```javascript
    const DirectiveComponent = {
    directives: {
      focus: {
        mounted(el) {
          el.focus()
        },
      },
      pos: {
        mounted(el, binding) {
          el.style[binding.arg] = binding.value;
        },
      }
    },
    data() {
      return {
        direction: 'left',
        distance: '100px'
      }
    },
    template: `<input v-focus v-pos:[direction]="distance" class="header" />`
  }

```

### 渲染函数

 1. 了解`h()`函数参数
 2. 了解实例 `property API`
 3. 了解虚拟DOM

### 插件
