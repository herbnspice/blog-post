<template>
    <div v-if="post" class="post">
        <h1> {{ post.title }} </h1>
        <p>  {{ post.body }}  </p>
        <span v-for="tag in post.tags" :key="tag "> 
            #{{ tag }}
        </span> 
    </div>
    <div v-else> <Spinner/> </div>
</template>
<script>
import getPost from '@/composables/getPost'
import Spinner from '@/components/Spinner.vue'
export default {
    props: ['id'],
    components:{ Spinner },
    setup(props){
        const { post, error, load } = getPost(props.id)
        load()
        return{ post, error }
    }
}
</script>