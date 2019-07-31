<template>
  <div class="footerWrapper">
      <img src="../assets/logo-footer.png" alt="logo la positiva">
      <div class="address">
        <span class="title">Oficina Principal</span>
        <span class="addressDescription">Calle Francisco Masías 370</span>
        <span class="addressDescription">San Isidro, Lima 27</span>
      </div>
      <div class="social">
        <span class="title">Síguenos</span>
        <div class="socialLogos">
          <a href="#">
            <img class="imgLogo" src="../assets/facebook-logo.png" alt="facebook-logo">
          </a>
          <a href="#">
            <img class="imgLogo" src="../assets/twitter.png" alt="twitter-logo">
          </a>
          <a href="#">
            <img class="imgLogo" src="../assets/youtube.png" alt="yotube-logo">
          </a>
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
  padding: 30px 40px;
  background-color: $primary;
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
