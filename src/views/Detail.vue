<template>
  <div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <h2>{{ post.body }}</h2>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>

    <p>{{ error }}</p>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import getPost from "@/composable/getPost";

export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let { load, post, error } = getPost(props.id); //{load,post,error}
    load();
    return { post, error };
  },
};
</script>

<style lang="scss" scoped></style>
