<template>
  <div>
    FORM
    <ul class="steps is-horizontal">
      <li :class="[currentStep === 1 ? 'is-active' : '', 'steps-segment']">
        <span class="steps-marker">1</span>
      </li>
      <li :class="[currentStep === 2 ? 'is-active' : '', 'steps-segment']">
          <span class="steps-marker">2</span>
      </li>
      <li :class="[currentStep === 3 ? 'is-active' : '', 'steps-segment']">
          <span class="steps-marker">3</span>
      </li>
    </ul>
    <div v-show="currentStep === 1" >
      <div class="inputWrapper">
        <custom-input
          name="name"
          label="Nombres"
          type="text"
          placeholder="Nombres"
          maxlength=30
          v-model="name"
          v-validate="'required|alpha'"
          :error="errors.first('name')"
        />
      </div>
      <div class="inputWrapper">
        <custom-input
          name="lastname"
          label="Apellidos"
          type="text"
          placeholder="Apellidos"
          maxlength=30
          v-model="lastname"
          v-validate="'required|alpha'"
          :error="errors.first('lastname')"
        />
      </div>
    </div>
    <div v-show="currentStep === 2" >
      <div class="inputWrapper">
        <custom-input
          name="phone"
          label="Celular"
          type="text"
          placeholder="+51"
          maxlength=11
          v-model="phone"
          v-validate="'required|digits:11'"
          :error="errors.first('phone')"
        />
      </div>
      <div class="inputWrapper">
        <custom-input
          name="address"
          label="Dirección"
          type="text"
          placeholder="Jr.."
          maxlength=60
          v-model="address"
          v-validate="'required|alpha_num'"
          :error="errors.first('address')"
        />
      </div>
    </div>
    <div v-show="currentStep === 3" >
      <div class="inputWrapper">
        <input
          type="text"
        />
      </div>
    </div>
    <div class="buttonsWrapper">
      <button v-if="currentStep != 1"  
        @click="backStep"
        class="button buttonStyle"
      >regresar
      </button>
      <button v-if="currentStep != 3"
        @click="nextStep"
        class="button buttonStyle"
      >siguiente
      </button>
    </div>
  </div>
</template>
<script>
import CustomInput from './CustomInput';
import { mapFields } from 'vee-validate';

export default {
  components:{
    CustomInput,
  },
  name:'Form',
    data(){
      return {
        currentStep: 1,
        name:"",
        lastname:"",
        email:"",
        phone:null,
        address:"",             
      };              
    },
    computed:{
      firstStepIsValid(){
        return this.fields.name.valid && this.fields.lastname.valid;
      },
      secondStepIsValid(){
        return this.fields.phone.valid && this.fields.address.valid;
      }
    },
    methods: {
      nextStep(){
        if(this.currentStep === 1 && this.firstStepIsValid){
          return this.currentStep = 2;
        }
        if(this.currentStep === 2 && this.secondStepIsValid){
          return this.currentStep = 3;
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

.buttonStyle{
  color: $primary;
}
.inputWrapper {
  margin: 25px;
}
.buttonsWrapper{
  display: flex;
  justify-content: center;
}
</style>

