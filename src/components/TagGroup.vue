<template>
  <div class="tag-group">
    <h4 class="pill">Tag Group</h4>
    <h1 v-for="tag in Taggroup" :key="tag" class="pill">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">{{
        tag
      }}</router-link>
    </h1>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    props.posts.forEach((post) => {
      // console.log(post);
      post.tags.forEach((tag) => {
        // console.log(tag);
        tags.value.push(tag);
      });
    });
    // console.log(tags.value);
    let Taggroup = tags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });
    return { Taggroup };
  },
};
</script>

<style>
.tag-group {
  display: inline-block;
  margin: 10px;
  padding: 8px;
}
.tag-group h1 {
  display: inline-block;
  position: relative;
  font-size: 15px;
  margin-bottom: 10px;
}
</style>
