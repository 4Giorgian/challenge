<template>
  <div class="formWrapper">
    <div class="wizardWrapper">
      <ul class="steps is-horizontal my-step-style">
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
    </div>
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
        <label class="label" >Fecha de Nacimiento</label>
        <datepicker
          input-class="datepicker"
          v-model="date" name="date"
          v-validate="'required'"
          placeholder="fecha de nacimiento"
        ></datepicker>
        <span>{{ errors.first('date') }}</span>
      </div>
      <div class="inputWrapper">
        <custom-input
          name="email"
          label="Correo Electrónico"
          type="text"
          placeholder="challenge@test.com"
          maxlength=100
          v-model="email"
          v-validate="'required|email'"
          :error="errors.first('email')"
        />
      </div>
    </div>
    <div class="buttonsWrapper">
      <button v-if="currentStep != 1"  
        @click="backStep"
        class="button buttonStyle"
      >REGRESAR
      </button>
      <button v-if="currentStep != 3"
        @click="nextStep"
        class="button buttonStyle"
      >SIGUIENTE
      </button>
      <button v-if="currentStep === 3"
        @click="submit"
        class="button buttonStyle"
      >ENVIAR
      </button>
    </div>
  </div>
</template>
<script>
import CustomInput from './CustomInput';
import { mapFields } from 'vee-validate';
import Datepicker from 'vuejs-datepicker';

export default {
  components:{
    CustomInput,
    Datepicker
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
        date: null,
        email:"",
        success: false,             
      };              
    },
    computed:{
      firstStepIsValid(){
        return this.fields.name.valid && this.fields.lastname.valid;
      },
      secondStepIsValid(){
        return this.fields.phone.valid && this.fields.address.valid;
      },
      thirdStepIsValid(){
        return this.fields.email.valid;
      },
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
      },
      submit(){
        if(this.thirdStepIsValid){
          this.success = true;
        }

      }       
    }       
}
</script>

<style lang="scss" >
@import '../sass/index.scss';
.formWrapper{
  margin-bottom: 105px;
  max-width: 600px;
  margin: 0 auto;
}
.wizardWrapper{
  padding: 0 25px;
  margin-bottom: 20px;
}
.inputWrapper {
  margin: 25px;
}
.buttonStyle{
  font-size: 13px;
  border: 1px solid #ff6d46;
  color: #ff6d46;
  border-radius: 25px;
  cursor: pointer;
  transition: all .25s;
  background-color: white;
  height: 40px;
  min-width: 120px ;

  &:hover{
    border-radius: 34px;
    height: 40px;
    color: white !important;
    background-color: #FF6D46 !important;
    min-width: 120px ;
    }
}
.buttonsWrapper{
  display: flex;
  justify-content: space-around;
}
.datepicker{
  border: 1px solid #D2D2D2;
  border-radius: 8px;
  box-sizing: border-box;
  height: 50px;
  padding-left: 15px; 
  width: 100%;
  font-size: 20px;
  &::placeholder{
      color: $ligth-grey;
    } 
}
.label{
  color: $grey; 
  font-weight: 100;
  font-size: 20px;
}
</style>

