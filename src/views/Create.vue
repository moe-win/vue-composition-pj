<template>
  <form @submit.prevent="createPost">
    <label class="title">Title</label>
    <input type="text" required v-model="title" />
    <label class="body">Body</label>
    <textarea required v-model="body"></textarea>
    <label class="tags">Tags(Press Enter to add new Tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="keydown" />
    <div v-for="tag in tags" :key="tag" class="pill">{{ tag }}</div>
    <button class="button">Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; //vue-router using one package useRouter object

export default {
  setup() {
    let router = useRouter(); //same as $router.param.()
    console.log(router);

    let title = ref(""); //string for title input
    let body = ref(""); //string for body input
    let tag = ref(""); //html(only tag)
    let tags = ref([]); //html,css,java,laravel(put in array all tags)
    let keydown = () => {
      //   alert("user press key enter");
      if (!tags.value.includes(tag.value)) {
        //check tag inside previous tags are include not allow
        tags.value.push(tag.value); //after check not inside put in new tag to tags array
      }
      tag.value = ""; //clear tag input for new tag
    };
    let createPost = async () => {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: title.value,
          body: body.value,
          tags: tags.value,
        }),
      });
      router.push("/");
    };
    return { title, body, tag, keydown, tags, createPost };
  },
};
</script>

<style>
form {
  margin: 0 auto;
  text-align: left;
  max-width: 300px;
}
input textarea {
  display: block;
  margin: 20px;
  width: 100%;
  padding: 10px 5px;
  border: 10px;
  box-sizing: 10px solid rgb(255 255 255);
}
textarea {
  height: 130px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: rgb(255, 127, 202);
  background-color: rgb(235, 235, 16);
  margin-bottom: 20px;
}
label::before {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
}
.button {
  margin: 30px;
  padding-top: 2px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 25px;
  font-size: 18px;
}
</style>
