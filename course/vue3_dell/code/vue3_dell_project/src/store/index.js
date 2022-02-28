import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    name: "Joy",
    userInfo: "",
  },
  mutations: {
    // 主要进行同步操作，不允许写异步代码
    changeUserName(state, value) {
      state.name = value;
    },
  },
  actions: {
    // 主要进行异步操作
    getUserInfo({ state, commit }) {
      axios
        .get(
          "https://www.fastmock.site/mock/786e34a2cfe42b4b4e85a42e8367f7eb/vue/api/getUserInfo"
        )
        .then((res) => {
          if (res.data.code === 200) {
            state.userInfo = res.data.data;
            console.log("state.userInfo: ", res.data.data);
          }
        })
        .catch((err) => {});
    },
  },
  modules: {},
});
