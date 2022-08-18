<template>
  <div class="body">
    <VHeader/>
    <VMain/>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
import VMain from "@/components/VMain";
export default {
  name: "MainPage",
  components:{VHeader, VMain}
}
</script>

<style scoped>

</style>