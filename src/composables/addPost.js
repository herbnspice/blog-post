import { ref } from 'vue' 
const addPost = ( post ) => {
    
    const isSuccess = ref(false)    
    const isLoad = ref(false)
    const error = ref(null)

    const init = async () =>{

        isLoad.value  = true
        await new Promise( resolve => {
            setTimeout( resolve, 2000 )
        })
        try{
            await fetch( 'http://localhost:3000/posts', {
                method: 'POST',
                headers: { 'Content-Type' :  'application/json' },
                body: JSON.stringify( post )  }) 
            .then( ( data ) => {
                isLoad.value  = false
                if( !data.ok ){
                    throw Error('no data available')
                } 
                isSuccess.value =  true
                
            }).catch( (err) => {
                isLoad.value = false
                error.value = err.message
                console.log( error.value)
            })
        } catch( err ) {
            error.value = err.message
            console.log( error.value)
        }
    }

    return { isLoad , isSuccess,  error, init  }
}

export default addPost
