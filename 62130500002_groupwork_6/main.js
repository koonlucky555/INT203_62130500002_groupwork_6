const constraints = {
    name: {
        presence: true,
    },
    username: {
        presence: true,
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
}

var app = Vue.createApp({
    data() {
        return {
            formdata: {
                firstname: null,
                lastname: null,
                gender: null,
                email: null,
                phone: null,
                
            },
            errors: null,
            image: './images/lucky.jpg',
            name: 'Lucky KL',
        }
    },
    methods: {
        checkForm(){
            this.errors = validate(this.formdata,
                                    constraints)
            console.log(this.errors)
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
})

app.component('display-error',{
    props:{
        errors: {
            type: Object,
            required: true,
        },
        field: {
            type: String,
            required: true,
        }
    },
    template: 
    /*html*/
    `
    <div v-if="errors && errorList">
        <p v-for="error in errorList" class="text-red-500">{{error}}</p>
    </div>
    `,
    computed: {
        errorList(){
            return this.errors[this.field]
        }
    }
})

app.mount('#app')