<template>
  <div class="home">
    <div class="error">{{ error }}</div>
    <PostList :posts="posts"></PostList>
    <div v-if="posts.length > 0"></div>
    <div v-else><spinner></spinner></div>

    <!-- <div v-if="showPost">
    </div>
    <button @click="showPost = !showPost">show post</button>
    <button @click="posts.pop">deleted</button> -->
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import getPosts from "@/composable/getPosts";
import Spinner from "@/components/Spinner.vue";

export default {
  components: { PostList, Spinner },
  setup() {
    // let showPost = ref(true);
    // let posts = ref([]);
    //make variable and get error line 40
    // let error = ref("");
    //start async /await methods here
    // let loading = async () => {
    //   try {
    //     let response = await fetch("http://localhost:3000/posts");
    // console.log(response);
    // if (response.status === 404) {
    //   throw new Error("not found Page and URL");
    // }
    //this is getting data from database line 25
    // let datas = await response.json();
    // console.log(datas);//get data form datas
    //datas to put in posts and show up browwer using 'ref' in value array[]
    //   posts.value = datas;
    // } catch (err) {
    // console.log(error.message);
    //error received from line 29
    //     error.value = err.message;
    //   }
    // };

    let { posts, error, loading } = getPosts();
    loading();

    return { posts, error }; //{showpost}
  },
};
</script>
<style>
.error {
  color: red;
}
.home {
  margin: 0 auto;
  padding: 40px;
  max-width: 1200px;
}
</style>
