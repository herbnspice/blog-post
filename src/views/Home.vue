<template>
  <div class="home">
    <div v-if="error"> {{ error }} </div>
    <div v-if="posts.length"> 
        <div v-for="post in posts" :key="post.id">
          <PostList :post="post" />
        </div>
   </div>
    <div v-else> Loading  ... </div>
  </div>
</template>
<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
export default {
  name: 'Home',
  components: {
    PostList
  },
  setup(){
    const { posts, error, load }  = getPosts()
    load()
    return { posts, error}
  }
}
</script>
