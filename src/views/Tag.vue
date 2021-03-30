<template>
    <div class="tag">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length" class="posts">
            <div v-for="post in postWithTags" :key="post.id">
                <PostList :post="post" /> 
            </div>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    components:{
        Spinner,
        PostList
    },
    setup(){
        const route = useRoute()
        const { posts, error, load } = getPosts()
        load()

        const postWithTags = computed( ()=>{
            
            return posts.value.filter( ( p ) =>  { return  p.tags.includes( route.params.tag ) } ) 

        })


        return { error, postWithTags, posts }
    }
}
</script>

<style>

</style>