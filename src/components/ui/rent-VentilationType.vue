<template>
  <div style="text-align: left;">
    <div>
      <input type="checkbox" class="custom-checkbox" id="VentilationTypeCH" @click="clickCH" ref="inputch" />
      <label class="label" for="VentilationTypeCH" >Вентиляция</label>
      <div v-show="show">
        <div class="item">
          <input
              @click="radioclick"
              class="form-check-input"
              type="radio"
              name="VentilationType"
              ref="VentilationType_forced"
              id="VentilationType_forced"
              value="forced" />
          <label for="VentilationType_forced">Приточная</label>
        </div>
        <div class="item">
          <input
              @click="radioclick"
              class="form-check-input"
              type="radio"
              name="VentilationType"
              ref="VentilationType_natural"
              id="VentilationType_natural"
              value="natural" />
          <label for="VentilationType_natural">Естественная</label>
        </div>
      </div>
    </div>
    <input type="hidden" ref="input" :value="getValue()">
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "rent-VentilationType",
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
            if(this.value=='forced'){
              this.$refs.VentilationType_forced.checked = true
            }
            if(this.value=='natural'){
              this.$refs.VentilationType_natural.checked = true
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