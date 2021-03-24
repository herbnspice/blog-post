<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SingleList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleList from '@/components/List.vue'

export default {
  name: 'Home',
  components: {
    SingleList
  }
}
</script>
