<template>
    <div>
      <label>{{label}}</label>
      <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :v-validate="validations"
      />
      <span>{{error}}</span>
    </div>
</template>
<script>
export default {
    name:"CustomInput",
    props:{
      name:String,
      type:String,
      placeholder:String,
      maxlength:String,
      value:"",
      label:String,
      validations:String,
      error:String,
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/index.scss';
label {
  font-size: 20px;
  color: $grey;
};
input {
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
</style>
