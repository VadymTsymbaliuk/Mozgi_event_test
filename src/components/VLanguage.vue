<template>
  <div class="container">
    <div class="container__chose-language" @mouseover="showOptions" @touchstart="showOptions">
      <span>👅</span>
    </div>
    <div class="container__language-items">
      <div>ua</div>
      <div>ru</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VLanguage",
  methods: {
    showOptions() {
      let optionContainer = document.querySelector('.container__language-items')
      let options = optionContainer.childNodes;
      options.forEach(o => {
        if (!o.classList.contains('show')) {
          for (let i = 0; i < options.length; i++) {

            setTimeout(() => {
              options[i].classList.add('show')
            }, i * 1000)
          }
        } else {
          o.classList.remove("show")
        }
      })


    }
  }
}
</script>

<style scoped>

</style>