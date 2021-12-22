<template>
  <div class="rent-land">
    <div class="label" ref="label">{{label}}</div>
    <div style="display: flex">
      <input type="text"
             ref="input"
             @input="updateinput_"
             :value="getValue().Area"
      />
      <rent-select
          v-bind:items="[
            {value:'hectare',label:'Гектар'},
            {value:'sotka',label:'Сотка'},
          ]"
          field_="AreaUnitType"
          tip_="list"
          :value="this.land.AreaUnitType"
          width_label="0px"
          width_input="100%"
          :parent_ob="this.setObvalue"
          label=''>
      </rent-select>
    </div>
  </div>
</template>

<script>

import RentSelect from "@/components/ui/rent-select";
import {mapMutations} from "vuex";
export default {
  name: "rent-land",
  components: {
    RentSelect

  },
  props:{
    label:String,
    value:String,
    field_:String,
    width_label:String,
    width_input:String,
    width_item:String,
    field_ob:Object
  },
  data() {
    return {
      land:{
        Area: 0,
        AreaUnitType: "hectare",
        Type: ""
      }
    }
  },
  methods:{
    ...mapMutations({
      setStore:'rent/setField',
      setOb:'rent/setObField'

    }),
    setObvalue:function (field,val){
      this.land[field] = val;
      this.setOb({
        ob:this.field_ob,
        field:this.field_,
        value:JSON.stringify(this.land)})
    },
    updateinput_(ev){

      this.land.Area = ev.target.value.replace(new RegExp('_', 'g'),'')
      this.setOb({
        ob:this.field_ob,
        field:this.field_,
        value:JSON.stringify(this.land)})

    },
    /**
      Преобразование входного стрингового параметра в json обьект
         {
            Area: 0,
            AreaUnitType: "",
            Type: ""
         },
     */
    getValue:function (){
      let J = {};
      try {
        J=JSON.parse(this.value);
      }catch{
        J = {
          Area: 0,
          AreaUnitType: "sotka",
          Type: ""
        }
        this.setOb({
          ob:this.field_ob,
          field:this.field_,
          value:JSON.stringify(J)})
      }
      this.land.AreaUnitType = J.AreaUnitType
      this.land.Area = J.Area
      this.land.Type = J.Type
      return J;
    }
  },
  mounted() {
    setTimeout(()=>{
      Inputmask('####').mask(this.$refs.input)
      if(this.$props.width_label){
        this.$refs.label.setAttribute('style','min-width:'+this.$props.width_label);
      }
      if(this.$props.width_input && this.$refs.input){
        this.$refs.input.setAttribute('style','min-width:'+this.$props.width_input);
      }
    },1)
  }
}
</script>

<style scoped>
  .rent-land{
    display: flex;
  }
  .label{
    white-space:nowrap;
    min-width: 130px;
    text-align: left;
  }

  input{
    height: 31px;
    padding-right: 4px;
    padding-left: 4px;
    width: 50px;
    margin-top: 12px;
    margin-right: 8px;

  }
</style>