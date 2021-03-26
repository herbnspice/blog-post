<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SingleList/>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleList from '@/components/SinglePost.vue'

export default {
  name: 'Home',
  components: {
    SingleList
  }
}
</script>
