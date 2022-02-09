<template>
  <div>
      <div class="information">
      <button @click="FunctionPhonesContact" class="tabs">
          Phones Contact
      </button>
      <button @click="FunctionContactForm" class="tabs">
          Contact Form
      </button>
  </div>
  <keep-alive>
      <component :is="CurrentComponent"/>
  </keep-alive>
  </div>
</template>

<script>
import PhonesContact from "@/components/PhonesContact.vue"
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'Information',
    components: {
        PhonesContact,
        ContactForm
    },
    data(){
        return{
            CurrentComponent: "PhonesContact"
        }

    },
    methods:{
        FunctionPhonesContact(){
            this.CurrentComponent = "PhonesContact"
        },
        FunctionContactForm(){
            this.CurrentComponent = "ContactForm"
        }
    }
}
    
</script>

<style scoped>
.information{
    width: 40%;
    display: flex;
}
.tabs{
    width: 8rem;
    height: 2rem;
    cursor: pointer;
}

</style>