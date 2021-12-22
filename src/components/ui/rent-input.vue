<template>
  <div class="select" style="flex-wrap: unset">
    <div class="label" ref="label">{{this.label}}</div>
    <div style="width: 100%">
      <div style="display: flex">
        <input type="text"
               ref="input"
               :value="this.value"
               @input="updateinput_"
        />
      </div>

    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import Inputmask from "inputmask";
export default {
  name: "rent-input",
  props:{
    field_:String,
    label:String,
    value:String,
    width_label:String,
    width_input:String,
    mask:String,
    field_ob:Object
  },

  methods:{
    ...mapMutations({
      setStore:'rent/setField',
      setOb:'rent/setObField'
    }),
    updateinput_(ev){
      this.setOb({
        ob:this.field_ob,
        field:this.field_
        ,value:ev.target.value})


      //this.fieldob[this.field_] = ev.target.value;
    }
  },
  mounted() {
    setTimeout(()=>{
      if(this.$props.width_label){
        this.$refs.label.setAttribute('style','min-width:'+
            this.$props.width_label+';width:'+this.$props.width_label);
      }
      if(this.$props.width_input){
        this.$refs.input.setAttribute('style','width:'+this.$props.width_input);
      }
      if(this.$props.mask){
        Inputmask(this.$props.mask).mask(this.$refs.input)
      }

    },1)

  }
}
</script>

<style scoped>
.label{
  white-space:nowrap;
  min-width: 130px;
  text-align: left;
}
.select{
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 8px;
}
input{
  height: 31px;
  padding-right: 4px;
  padding-left: 4px;
  width: 200px;

}
</style>