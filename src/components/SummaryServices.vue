<template>
  <div class="summaryWrapper">
      <div class="title">Resumen de servicios</div>
      <div class="servicesWrapper">
        <div class="serviceWrapper" :key="service.id" v-for="service in services">
          <img class="serviceImage" :src="service.image" alt="image-service">
          <div class="serviceTitle">{{service.name}}</div>
          <div class="serviceDescription">{{service.description}}</div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"Summary",
    data(){
      return{
        services: null,
      }
    },
    mounted(){
      axios.get('https://challenge-labp.s3.amazonaws.com/services.json').then(result=>{
        console.log("result", result);
        this.services = result.data;
      })
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/index.scss';

.summaryWrapper{
  max-width: 600px;
  margin: 0 auto;
  padding: 105px 25px 25px;
  @include since-tablet{
    max-width: 654px;
  }
}
.servicesWrapper{
  @include tablet {
    display: flex;
    flex-wrap: wrap;
  }
}
.serviceImage{
  margin-bottom: 15px;
}
.title{
  color: $dark-grey;
  font-size: 28px;
  font-weight: 100;
  line-height: 37px;
  margin-bottom: 25px;
  padding: 0 30px;
  text-align: center;
}
.serviceWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
  padding: 0 30px;
}
.serviceTitle{
  color:$blue-bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 5px;
}
.serviceDescription{
  color:$blue;
  font-size: 16px;
  text-align: center;
}
</style>
