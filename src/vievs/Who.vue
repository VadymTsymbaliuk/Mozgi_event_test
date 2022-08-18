<template>
  <div class="body">
    <VHeader/>
    <main>
      <div class="container">
        <router-link to="/">main page</router-link>
        <h1>Who?</h1>
      </div>
    </main>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";

export default {
  name: "Who",
  components: {VHeader}
}
</script>

<style scoped>

</style>