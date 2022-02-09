<template>
  <form @submit.prevent="enviar" class="form">
      <label for="Department">Department</label>
      <select v-model="SelectedDepartment" name="Department">
          <option v-for="department in departments" :key="department.id" :value="department.name">{{department.name}}</option>
      </select>
      <label for="Name">Nombre: </label>
      <input v-model="Name" type="text">
      <label for="Mail">Mail: </label>
      <input v-model="Mail" type="email">
      <label for="Mensaje">Mensaje: </label>
      <textarea v-model="Mensaje" name="Mensaje" cols="30" rows="10"></textarea>
      <button>Enviar</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            SelectedDepartment:"",
            Name: "",
            Mail: "",
            Mensaje: ""
        }
    },
    methods:{
        enviar(){
            window.localStorage.setItem("Nombre", this.Name)
            this.SelectedDepartment = ""
            this.Name = ""
            this.Mail = ""
            this.Mensaje = ""
        }
    }
}
</script>

<style>
.form{
    width: 25rem;
    display: flex;
    flex-direction: column;
}
</style>