<template>
  <div class="summaryWraper">
      <div class="title">Resumen de servicios</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"Summary",
    data(){
      return{

      }
    },
    mounted(){
      axios.get('https://challenge-labp.s3.amazonaws.com/services.json').then(result=>{
        console.log("result", result);
      })
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/index.scss';

.title{
  color: $dark-grey;
  font-size: 28px;
  font-weight: 100;
  line-height: 37px;
  padding: 0 30px;
  text-align: center;
}
</style>
