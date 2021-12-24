<template>
  <div style="text-align: left;">
    <div>
      <input type="checkbox" class="custom-checkbox" id="ConditioningTypeCH" @click="clickCH" ref="inputch" />
      <label class="label" for="ConditioningTypeCH" >Кондиционир-е</label>
      <div v-show="show">
        <div class="item">
          <input
              @click="radioclick"
              class="form-check-input"
              type="radio"
              name="ConditioningType"
              ref="ConditioningType_central"
              id="ConditioningType_central"
              value="central" />
          <label for="ConditioningType_central">Центральное</label>
        </div>
        <div class="item">
          <input
              @click="radioclick"
              class="form-check-input"
              type="radio"
              name="ConditioningType"
              ref="ConditioningType_local"
              id="ConditioningType_local"
              value="local" />
          <label for="ConditioningType_local">Местное</label>
        </div>
      </div>
    </div>
    <input type="hidden" ref="input" :value="getValue()">
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "rent-ConditioningType",
  data() {
    return {
      show:false,
    }
  },
  props:{
    value:String,
    field_:String,
    field_ob:Object,
  },
  methods:{
    ...mapMutations({
      setStore:'rent/setField',
      setOb:'rent/setObField'

    }),
    clickCH:function(ev){
      this.show = ev.target.checked
      if(this.show){
        this.setOb({
          ob:this.field_ob,
          field:this.field_,
          value:'forced'})
      }else {
        this.setOb({
          ob:this.field_ob,
          field:this.field_,
          value:'no'})
      }
    },
    radioclick:function (ev){
      this.setOb({
        ob:this.field_ob,
        field:this.field_,
        value:ev.target.value})
    },
    getValue:function(){
      if(this.value===undefined || this.value===''){
        this.setOb({
          ob:this.field_ob,
          field:this.field_,
          value:'no'})
        return 'no'
      }else{
        setTimeout(()=>{
          if(this.value=='no'){
            this.$refs.inputch.checked=false
            this.show = false
          }else{
            this.$refs.inputch.checked=true
            if(this.value=='central'){
              this.$refs.ConditioningType_central.checked = true
            }
            if(this.value=='local'){
              this.$refs.ConditioningType_local.checked = true
            }
            this.show = true
          }

        },1)
        return this.value
      }
    }
  }
}

</script>

<style scoped>
.label{
  font-weight: bolder;
  margin-left: 6px;
  vertical-align: super;
}

.item{
  margin-top: 8px;
}

label{
  margin-left: 6px;
  vertical-align: super;

}

input[type="checkbox"]{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>