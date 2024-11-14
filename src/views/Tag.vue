<template>
  <div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="homelayout">
      <div><PostList :posts="filteredPost"></PostList></div>
      <div>
        <TagGroup :posts="posts"></TagGroup>
      </div>
    </div>
    <!-- <div v-else>{{ loading }}</div> -->
  </div>
</template>

<script>
import { computed } from "vue";
import getPosts from "../composable/getPosts";
import PostList from "@/components/PostList.vue";
import TagGroup from "@/components/TagGroup.vue";
export default {
  components: { TagGroup, PostList },
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

<style>
.home {
  margin: 0 auto;
  padding: 40px;
  max-width: 1200px;
}
.homelayout {
  display: grid;
  grid-template-columns: 600px 200px;
}
</style>
