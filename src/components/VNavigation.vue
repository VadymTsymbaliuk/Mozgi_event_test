<template>
  <div class="container">
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="navbar-item">
          <router-link to="/where">where?</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/who">who?</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/what">what?</router-link>
        </li>
      </ul>
      <button class="navbar__toggle-menu toggle__animation" @click="openToggleMenu" />
    </nav>
  </div>
</template>

<script>
export default {
  name: "VNavigation",
  props:{
    openToggleMenu: Function
  }
}
</script>

<style scoped>

</style>