<template>
    <div>
        <h3>Contact Us </h3>
        <form>
            <input ref="el" type="text" placeholder="Name" v-model="name" required/>    
            <br/>
            <br/>
            <input type="email" placeholder="Email" v-model="email" required/>
            <br/>
            <br/>
            <input type="number" placeholder="Phone" v-model="phone"/>
            <br/>
            <br/>
            <input type="text" placeholder="Message" v-model="message" required/>
            <div>
                <button 
                    @click="submitForm"
                    v-bind:disabled="name.length == 0"
                >Submit</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
// <-- library to check & reset form -->
import { ref, defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'ContactUs',
  setup: () => {
    const el = ref()
    const name = ref('')
    const email = ref('')
    const phone =ref('')
    const message = ref('')
    
    const submitForm = () => {
        alert('Form submitted!')
        console.log(`Form submitted! 
        Name= ${name.value}
        Email= ${email.value}
        Phone= ${phone.value}
        Message= ${message.value}`)
    }

    onMounted(() => {
        el.value.focus()
    })
    return { 
        el,
        name,
        email, 
        phone, 
        message,
        submitForm
         }
  }
})
</script>

<style scoped>
input[type="text"] {
    padding: 5px,
}
button {
    margin-top: 10px
}
</style>