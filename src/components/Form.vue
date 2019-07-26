<template>
    <div>
        FORM
        <ul class="steps is-horizontal">
            <li :class="[currentStep == 1 ? 'is-active' : '', 'steps-segment']"
            >
                <span href="#" class="steps-marker">1</span>
            </li>
            <li :class="[currentStep == 2 ? 'is-active' : '', 'steps-segment']">
                <span class="steps-marker">2</span>
            </li>
            <li :class="[currentStep == 3 ? 'is-active' : '', 'steps-segment']">
                <span class="steps-marker">3</span>
            </li>
        </ul>
        <button v-if="currentStep != 1" 
          @click="backStep"
          class="button buttonStyle"
        >regresar
        </button>
        <button
          @click="nextStep"
          class="button buttonStyle"
        >siguiente
        </button>
    </div>
</template>
<script>
export default {
  name:'Form',
    data(){
      return {
        currentStep: 1,               
        };              
      },        
    methods: {
      nextStep(){
        if(this.currentStep >= 3){
        }else{   
          this.currentStep++;
        }
      },
      backStep(){   
          this.currentStep--;
      }        
    }       
}
</script>

<style lang="scss" scoped>
@import '../sass/index.scss';

.buttonStyle {
    color: $primary;
}
</style>

