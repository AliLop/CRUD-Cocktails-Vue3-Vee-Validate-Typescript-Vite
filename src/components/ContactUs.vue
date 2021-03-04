<template>
    <div class="form-view">
        <Form class="contactUs" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
            <div>
                <label>Name*</label>
                <Field class="field" name="name" as="input" placeholder='John Smith' v-model="name" />
                <div>
                    <br/>
                    <span>{{ errors.name }}</span>
                </div>
            </div>
            <div>
                <label>Email*</label>
                <Field class="field" name="email" as="input" placeholder='example@example.com' v-model="email" />
                <div>
                    <br/>
                    <span>{{ errors.email }}</span>
                </div>
            </div>
            <div>
                <label>Phone*</label>
                <Field class="field" name="phone" as="input" placeholder= "(xxx)xxxxxxx" v-model="phone" />
                <div>
                    <br/>
                    <span>{{ errors.phone}}</span>
                </div>
            </div>
            <div>
                <label>Message*</label>
                <Field class="field" name="message" as="input" placeholder='Message' v-model="message" />
                <div>
                    <br/>
                    <span>{{ errors.message }}</span>
                </div>
            </div>
            <div>
                <br/>
                <span>* Required fields</span>
            </div>
            <button v-bind:disabled="name.length == 0 || email.length < 7 || message.length < 8">Submit</button>
        </Form>
    </div>
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
            phone: yup.string().required("Phone number is required").matches(/\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/),
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
            name.value = ''
            email.value = ''
            phone.value = ''
            message.value = ''
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
</script>

<style scoped>
.form-view {
  min-height: 78vh;
}
.contactUs {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #2c3e50;
    display:  inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
.field {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
</style>