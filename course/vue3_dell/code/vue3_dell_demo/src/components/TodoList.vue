<template>
  <div>
    TodoItem： 
    <input
      type="text"
      v-model="inputValue"
      @change="handleInputChange"
    />
    <button @click="addItemToList(inputValue)">Submit</button>
  </div>
  <ul>
    TodoList:
    <li
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item }}
    </li>
  </ul>

</template>

<script>
import { reactive, ref } from "vue";

const inputReleativeEffect = () => {
  const inputValue = ref("");
  const handleInputChange = () => {
    console.log("inputVaue: ", inputValue.value);
  };
  return { inputValue, handleInputChange };
};

const listReleativeEffect = () => {
  const list = reactive([]);
  const addItemToList = (item) => {
    console.log("click submit：", item);
    list.push(item);
  };
  return { list, addItemToList };
};

export default {
  setup(props) {
    const { inputValue, handleInputChange } = inputReleativeEffect();
    const { list, addItemToList } = listReleativeEffect();

    return {
      inputValue,
      list,
      addItemToList,
      handleInputChange,
    };
  },
};
</script>
<style lang="">
</style>