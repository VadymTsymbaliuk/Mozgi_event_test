<template>
  <div class="body">
    <VHeader/>
    <main>
      <div class="container">
        <router-link to="/">main page</router-link>
        <h1>Where?</h1>
      </div>
    </main>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";

export default {
  name: "Where",
  components: {VHeader}
}
</script>

<style scoped>

</style>