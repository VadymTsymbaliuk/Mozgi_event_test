<template>
  <div class="body">
    <VHeader/>
    <main>
      <div class="container">
        <div class="m-auto text-center">
          <router-link to="/">main page</router-link>
          <h1>Who?</h1>
        </div>
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