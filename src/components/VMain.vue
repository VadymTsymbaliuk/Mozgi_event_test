<template>
  <main>
    <div class="container">
      <div class="container__title">
        <h1>
          FULL-CYCLE <br/>EVENT AGENCY
        </h1>
        <VTape/>
        <div class="container__show-reel-circle">
          <img src="../assets/img/circle.svg" alt="circle">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import VTape from "@/components/VTape";

export default {
  name: "VMain",
  components: {
    VTape
  }
}
</script>

<style scoped>

</style>