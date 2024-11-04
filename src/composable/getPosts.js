import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let loading = async () => {
    try {
      //start before fetching data from server making spinner circle
      // await new Promise((resolve, reject) => {
      //   // resolve();
      //   setTimeout(resolve, 4000);
      // });
      let response = await fetch("http://localhost:3000/posts");
      if (response.status === 404) {
        throw new Error("not found Page and URL");
      }
      let datas = await response.json();
      posts.value = datas;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, loading };
};
export default getPosts;
