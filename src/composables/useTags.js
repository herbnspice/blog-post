//take in array of posts
//create a new tag set to remove duplicates
//add the tags of each posts to the tag set
// return a single array of tags based on set 

import { ref } from 'vue'

const useTags = ( posts ) =>{

    const tags = ref([])
    const tagSet = new Set()

    posts.forEach( item => {

        item.tags.forEach( tag => {
            tagSet.add(tag)
        })
    })

    tags.value = [...tagSet]

    return { tags }
}

export default useTags 