<template>
  <div class="about">
    <h1>This is an login page</h1>
    <h3>User: {{ userName }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.state.name;
    },
  },
};
</script>
