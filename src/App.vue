<template>
  <router-view v-slot="{Component}">
    <transition
        enter-active-class="animate__animated animate__slideInLeft"
        mode="out-in"
    >
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>


window.addEventListener("DOMContentLoaded", () => {
  const logoAnim = document.querySelector('.logo-shader')
  logoAnim.style.animation = "slideUp 2s ease-out 1";
  logoAnim.style.transform = "translateY(0%)";
})

export default {
  name: 'App'
}
</script>

<style>

</style>
