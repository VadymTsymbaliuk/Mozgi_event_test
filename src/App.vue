<template>
  <router-view/>
</template>

<script>


window.addEventListener("DOMContentLoaded", () => {
  const logoAnim = document.querySelector('.logo-shader')
  logoAnim.style.animation = "slideUp 2s ease-out 1";
  logoAnim.style.transform = "translateY(0%)";
})

export default {
  name: 'App',
  methods: {
    logoAnimation() {

    },
    changeLanguage() {
      console.log("change language")
    }
  }
}
</script>

<style>

</style>
