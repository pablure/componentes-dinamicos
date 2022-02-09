<template>
  <div class="PhonesContact">
      <div class="table" v-for="department in departments" :key="department.id">
          <div>{{`${department.name}:`}}</div>
          <div>{{department.phoneNumber|FormatPhone}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'PhonesContact',
    filters:{
        FormatPhone (value){
            return `+34 ${value.toString().slice(0, 3)}-${value.toString().slice(3, 6)}-${value.toString().slice(6, 9)}`
        }
    }
}
</script>

<style>
.PhonesContact{
    width: 25rem;
}
.table{
    display: flex;
    justify-content: space-between;    
}
</style>