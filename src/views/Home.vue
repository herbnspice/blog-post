<template>
  <div class="home">
    <div v-if="error"> {{ error }} </div>
    <div v-if="posts.length"> 
        <div v-for="post in posts" :key="post.id">
          <PostList :post="post" />
         
        </div>
         <TagCloud :posts="posts" />
   </div>
    <div v-else> <Spinner/> </div>
  </div>
</template>
<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import getPosts from '@/composables/getPosts'
import Spinner from '@/components/Spinner.vue'
export default {
  name: 'Home',
  components: {
    PostList,
    Spinner,
    TagCloud
  },
  setup(){
    const { posts, error, load }  = getPosts()
    load()
    return { posts, error}
  }
}
</script>
