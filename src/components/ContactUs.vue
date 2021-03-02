<template>
    <Form class="ContactUs" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
        <div>
            <label> Name </label>
            <Field  name="name" as="input" placeholder='John Smith' v-model="name" />
        <div>
            <span>{{ errors.name }}</span>
        </div>
        </div>
        <div>
            <label> Email </label>
            <Field name="email" as="input" placeholder='example@example.com' v-model="email" />
        <div>
            <span>{{ errors.email }}</span>
        </div>
        </div>
        <div>
            <label> Phone </label>
            <Field name="phone" as="input" placeholder= "+99999" v-model="phone" />
        </div>
        <div>
            <label> Message </label>
            <Field name="message" as="input" placeholder='Message' v-model="message" />
        <div>
            <span>{{ errors.message }}</span>
        </div>
        </div>
        <button>Submit</button>
  </Form>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

export default({
    name: "ContactUs",
    components: {
        Field,
        Form,
        ErrorMessage,
  },
  setup() {
      const schema = yup.object().shape({
          name: yup.string().required("Name is required"),
          email: yup.string().email("Email is invalid").required("Email is required"),
          phone: yup.string(),
          message: yup.string().min(8).required("Message is required"),
      })
  
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

   return {
      schema,
      el,
      name,
      email,
      phone,
      message,
      submitForm,
  }
  }
});



//   methods: {
//     onSubmit(values) {
//       alert(JSON.stringify(values, null ,2));
//     }
//   }

//  <form>
//             <input ref="el" type="text" placeholder="Name" v-model="name" required/>    
//             <br/>
//             <br/>
//             <input type="email" placeholder="Email" v-model="email" required/>
//             <br/>
//             <br/>
//             <input type="number" placeholder="Phone" v-model="phone"/>
//             <br/>
//             <br/>
//             <input type="text" placeholder="Message" v-model="message" required/>
//             <div>
//                 <button 
//                     @click="submitForm"
//                     v-bind:disabled="name.length == 0"
//                 >Submit</button>
//             </div>
//         </form>
// <-- library to check & reset form -->
// import { ref, defineComponent, onMounted } from 'vue'
// export default defineComponent({
//   name: 'ContactUs',
//   setup: () => {
//     const el = ref()
//     const name = ref('')
//     const email = ref('')
//     const phone =ref('')
//     const message = ref('')
    
//     const submitForm = () => {
//         alert('Form submitted!')
//         console.log(`Form submitted! 
//         Name= ${name.value}
//         Email= ${email.value}
//         Phone= ${phone.value}
//         Message= ${message.value}`)
//     }

//     onMounted(() => {
//         el.value.focus()
//     })
//     return { 
//         el,
//         name,
//         email, 
//         phone, 
//         message,
//         submitForm
//          }
//   }
// })
</script>

<style scoped>
input[type="text"] {
    padding: 5px,
}
button {
    margin-top: 10px
}
</style>