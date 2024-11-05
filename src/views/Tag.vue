<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostList :posts="filteredPost"></PostList>
    </div>
    <div v-else>{{ loading }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import getPosts from "../composable/getPosts";
import PostList from "@/components/PostList.vue";
export default {
  components: { PostList },
  props: ["tag"],
  setup(props) {
    let { posts, error, loading } = getPosts();
    loading();
    let filteredPost = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });
    return { posts, error, filteredPost };
  },
};
</script>

<style></style>
