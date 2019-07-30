<template>
  <div class="homeWrapper">
    <div class="logoWrapper">
      <img class="logo" src="../../assets/logo-la-positiva.png" alt="logo-positiva">
    </div>
    <div class="bannerWrapper">
      <img class="banner" src="../../assets/banner.png"/>
    </div>
    <div class="textWrapper">
      <p class="title-text">Déjanos tus datos.¡Nos pondremos en contacto contigo!</p>
    </div>
    <form-component />
    <summary-services />
  </div>
</template>
<script>
import FormComponent from '../Form';
import SummaryServices from '../SummaryServices';
export default {
    name:'Homepage',
    components:{
        FormComponent,
        SummaryServices
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/index.scss';

.logo{
  width: 40%;  
}
.bannerWrapper{
  margin-bottom: 20px;
}
.banner{
  width: 100%;
}
.textWrapper{
  padding: 0 20px;
  margin-bottom: 20px;
}
.title-text{
  color: $dark-grey;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
}
.homeWrapper{
  padding-top: 20px;
}
.logoWrapper{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
