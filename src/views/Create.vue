<template>
  <div class="form">
      <form action="">
        <label for="title"> Title </label>
        <input type="text" required v-model="title">
        <label for="content"> Content</label>
        <textarea name="content" id="content"  v-model="body" required cols="30" rows="10"></textarea>
        <label for="tags"> Tags ( hit enter to add a tag )</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
        <div class="pin-container" > <span class="pin"  v-for="tag in tags" :key='tag' > #{{tag}} </span> </div>
        <button>Add Post</button>
      </form>
  </div>
</template>
<style scoped>
    .form{
        width: 480px;
        margin: 20px auto;
        background: #f3f3f3;
        padding:20px;
        border-radius:5px;
        position: relative;
    }
    label{
        display: block;
        width:100%;
        text-align: left;
        margin: 10px 0px;
    }
    input, textarea {
          min-width: 100%;
        max-width: 100%;
        border-radius: 5px;
        border: solid 2px #f1f1f1;
        display: block;
         box-sizing: border-box;
         padding:10px 20px;
    }
    button{
        padding: 10px;
        margin-top: 20px;
        min-width: 150px;
        background: #48ff0cc7;
        border: none;
        border-radius: 5px;

    }
    .pin-container{
        min-height: 50px;
    }
    .pin{
        border: solid 1px #b6b900;
        float: left;
        padding:10px;
        border-radius:5px;
        margin:10px;
        background: #b6b900;
        color: #fff;
        font-weight: 400
    }

</style>
<script>
import {ref} from 'vue'
export default {
    setup(){
        const title = ref("")
        const body = ref("")
        const tags = ref([])
        const tag = ref('')

        const handleKeydown  = () => {

            if( !tags.value.includes(tag.value)){
                tags.value.push( tag.value.replace(/\s/,''))
            }
            tag.value = ''
        }
        return { title, body, tags, tag, handleKeydown }

    }
}
</script>

<style>

</style>