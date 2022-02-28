<template>
  <div class="about">
    <h1>This is an login page</h1>
    <h3>User: {{ userName }}</h3>
    <p>{{ userInfo }}</p>
    <button @click="handleBtnClick">Change Name</button>
    <button @click="handleUserBtnClick">getUserInfo</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRefs, computed } from "vue";
// 用户名称
const uerNameReleativeEffect = () => {
  const store = useStore();
  const { name: userName } = toRefs(store.state);
  const handleBtnClick = () => {
    store.commit("changeUserName", "Ejy");
  };
  return { userName, handleBtnClick };
};

// 用户信息
const userInfoRelativeEffect = () => {
  const store = useStore();
  const userInfo = computed(() => store.state.userInfo);
  const handleUserBtnClick = async () => {
    await store.dispatch("getUserInfo");
  };
  return { userInfo, handleUserBtnClick };
};
export default {
  setup() {
    const { userName, handleBtnClick } = uerNameReleativeEffect();
    const { userInfo, handleUserBtnClick } = userInfoRelativeEffect();
    return {
      userName,
      handleBtnClick,
      userInfo,
      handleUserBtnClick,
    };
  },
};
</script>
