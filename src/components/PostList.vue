<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <PostDetail :post="post"></PostDetail>
    </div>
  </div>
</template>

<script>
// import { onMounted, onUnmounted, onUpdated } from "vue";
import PostDetail from "./PostDetail.vue";

export default {
  components: { PostDetail },
  props: ["posts"],
  setup(props) {
    // onMounted(() => console.log(" show onmounted"));
    // onUnmounted(() => console.log("show unmounted"));
    // onUpdated(() => console.log("data updated"));
  },
};
</script>

<style lang="scss" scoped></style>
