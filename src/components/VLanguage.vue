<template>
  <div class="select__language-container">
    <div class="chose__language" @mouseover="showOptions">
      <span>👅</span>
    </div>
    <div class="drop__language">
      <div class="ua">ua</div>
      <div class="ru">ru</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VLanguage",
  methods: {
    showOptions() {
      let optionContainer = document.querySelector('.drop__language')
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