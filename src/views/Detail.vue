<template>
  <div>
    <div v-if="post" class="post">
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
import { useRoute } from "vue-router"; //vue-router use one of useRouter object function to line 23
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let route = useRoute(); //same as $route.params.id(line 18 -useRouter invoke function)
    let { load, post, error } = getPost(route.params.id);
    // let { load, post, error } = getPost(props.id); //{load,post,error}
    load();
    return { post, error };
  },
};
</script>

<style>
.post {
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  position: relative;
  font-size: 15px;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h2 {
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  max-width: 500px;
}
.post h2::before {
  content: "";
  /* display: block; */
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  border-radius: 5px;
}
</style>
