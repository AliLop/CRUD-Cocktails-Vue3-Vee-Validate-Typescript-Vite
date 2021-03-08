<template>
  <h1>Get in touch!</h1>
    <div class="form-comp">
        <Form class="contactUs" @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
            <div>
                <label>Name*</label>
                <Field class="field" name="name" as="input" placeholder='John Smith' v-model="name" />
                <div>
                    <small>{{ errors.name }}</small>
                </div>
            </div>
            <div>
                <label>Email*</label>
                <Field class="field" name="email" as="input" placeholder='example@example.com' v-model="email" />
                <div>
                    <small>{{ errors.email }}</small>
                </div>
            </div>
            <div>
                <label>Phone*</label>
                <Field class="field" name="phone" as="input" placeholder= "(xxx)xxxxxxx" v-model="phone" />
                <div>
                    <small>{{ errors.phone }}</small>
                </div>
            </div>
            <div>
                <label>Message*</label>
                <Field class="field" name="message" as="input" placeholder='Message' v-model="message" />
                <div>
                    <small>{{ errors.message }}</small>
                </div>
            </div>
            <div>
                <br/>
                <span>* Required fields</span>
            </div>
            <button class="submit-button" v-bind:disabled="name.length == 0 || email.length < 7 || message.length < 8">Submit</button>
        </Form>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
import { sendForm } from '../services/Form.service';

export default({
    name: "ContactUsView",
    components: {
        Field,
        Form,
        ErrorMessage,
    },
    setup() {
        const schema = yup.object().shape({
            name: yup.string().required("Name is required"),
            email: yup.string().email("Email is invalid").required("Email is required"),
            phone: yup.string().required("Valid phone number is required"),
            message: yup.string().min(8).required("Message is required"),
        })
    
        const el = ref()
        const name = ref('')
        const email = ref('')
        const phone = ref('')
        const message = ref('')
        const form = {
                name,
                email,
                phone,
                message,
            }

        const submitForm = async () => {
            alert(`Form submitted!`);
            console.log(`Form submitted! 
                Name= ${name.value}
                Email= ${email.value}
                Phone= ${phone.value}
                Message= ${message.value}`);
                
            await sendForm( form );
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
    },
});
</script>

<style scoped>
.form-comp {
  margin: 0 5% 15%;
}
.contactUs {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    box-shadow: -4px 0 2px -2px rgba(44, 62, 80, 0.4)
}
label {
    color: var(--dark);
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
    color: var(--dark);
}
.submit-button {
    margin: 20px 0 0;
    padding: 15px;
}
</style>