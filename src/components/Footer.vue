<template>
  <div class="footerWrapper">
    <div class="content">
      <img src="https://dmarquina-statics.s3.amazonaws.com/logo-white.fd7f710.png" alt="logo la positiva">
        <div class="address">
          <span class="title">Oficina Principal</span>
          <span class="addressDescription">Calle Francisco Masías 370</span>
          <span class="addressDescription">San Isidro, Lima 27</span>
        </div>
        <div class="social">
          <span class="title">Síguenos</span>
          <div class="socialLogos">
            <a href="https://www.facebook.com/LaPositivaSeguros/?ref=br_rs">
              <img class="imgLogo" src="../assets/facebook-logo.png" alt="facebook-logo">
            </a>
            <a href="https://twitter.com/lapositiva_peru?lang=es">
              <img class="imgLogo" src="../assets/twitter.png" alt="twitter-logo">
            </a>
            <a href="https://www.youtube.com/user/LaPositivaPeru">
              <img class="imgLogo" src="../assets/youtube.png" alt="yotube-logo">
            </a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Footer"
}
</script>

<style lang="scss" scoped>
@import '../sass/index.scss';

.footerWrapper{
  background-color: $primary;
  padding: 30px 40px;
}
.content{
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 600px;
  @include since-tablet{
    flex-direction: row;
    justify-content: space-between;
  }
}
.address{
  color: $white;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.title{
  color: $white;
  font-size: 18px;
  margin-bottom: 10px;
}
.addressDescription{
  font-size: 15px;
  font-weight: 100
}
.imgLogo{
  margin-right: 10px;
}
</style>
