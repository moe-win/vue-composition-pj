<template>
  <div>
    <header>
      <h1>Blogging Page</h1>
    </header>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create</router-link>
    </nav>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
