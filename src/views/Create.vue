<template>
  <form @submit.prevent="createPost">
    <label class="title">Title</label>
    <input type="text" required v-model="title" />
    <label class="body">Body</label>
    <textarea required v-model="body"></textarea>
    <label class="tags">Tags(Press Enter to add new Tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="keydown" />
    <div v-for="tag in tags" :key="tag" class="pill">{{ tags }}</div>
    <button class="button">Add Post</button>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
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
    };
    return { title, body, tag, keydown, tags, createPost };
  },
};
</script>

<style>
.form {
  display: block;
  justify-content: center;
  max-width: 1200px;
}
.button {
  display: block;
  margin-top: 20px;
  padding: 10px 5px;
  border-radius: 10px;
  border-bottom-color: yellowgreen;
  font: 1em sans-serif;
}
.title {
  max-width: 400px;
  margin: 0% auto;
}
.body {
  display: block;
  margin-top: 20px;

  font-size: 14px;
  font-weight: 2px;
}
</style>
