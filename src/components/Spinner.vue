<template>
  <div>
    <h1 class="spinner"></h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.spinner {
  width: 30px;
  height: 30px;
  margin: 20px auto;
  border: 5px solid turquoise;
  border-radius: 50px;
  border-top-color: green;
  animation: spin 1s infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
