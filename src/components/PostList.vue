<template>
    <router-link tag="a" :to="{ name : 'Post', params: {id: post.id }}">
        <h1>{{ post.title }}</h1>
        <h2> {{ snippet }}</h2>
        <span v-for="tag in post.tags" :key="tag">
            #{{tag}}
        </span>
    </router-link>
</template>
<script>
import { computed } from 'vue';
export default {
    props: [ 'post'],
    setup( props ){
        const snippet = computed(() => {
            return props.post.body.substring(0,20) + '...'
        }) 

        return { snippet }
    }
}
</script>