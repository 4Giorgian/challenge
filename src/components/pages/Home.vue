<template>
  <div class="homeWrapper">
    <div class="logoWrapper">
      <a href="https://www.lapositiva.com.pe/wps/portal/corporativo/home">
        <img class="logo" src="https://dmarquina-statics.s3.amazonaws.com/logo.eb3abc1.png" alt="logo-positiva">
      </a>
    </div>
    <div class="bannerWrapper">
      <img class="banner" src="https://dmarquina-statics.s3.amazonaws.com/banner.e1f829c.jpg"/>
    </div>
    <div class="textWrapper">
      <p class="title-text">Déjanos tus datos.¡Nos pondremos en contacto contigo!</p>
    </div>
    <form-component />
    <summary-services />
    <footer-component />
  </div>
</template>
<script>
import FormComponent from '../Form';
import SummaryServices from '../SummaryServices';
import FooterComponent from '../Footer'
export default {
    name:'Homepage',
    components:{
        FormComponent,
        SummaryServices,
        FooterComponent
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/index.scss';

.logo{
  height: 47px; 
}
.bannerWrapper{
  margin-bottom: 20px;
  overflow: hidden;
  @include since-tablet{
    height: 365px;
  }
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
  background-color: white;
  display: flex;
  height: 70px;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  @include since-tablet{
    align-items: center;
  }
}
</style>
