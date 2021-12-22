<template>
  <div v-if="tip_==='select'">
    <leftModal  v-model:show="show">
      <ul class="listItems" @click="ulClick">
        <li v-for="item in items" :key="item.value">
          <div v-bind:class="getClass(item)"
               v-bind:value="item.value"
          >{{ item.label }}</div>
        </li>
      </ul>
    </leftModal>
    <div class="select" style="flex-wrap: unset">
      <div class="label" ref="label">{{label}}</div>
      <div style="width: 100%">
        <div style="display: flex">
          <input type="text"
                 ref="input"
                 readonly
                 v-bind:value="getlabel()"
          />
          <button @click="show=true"></button>
        </div>

      </div>
    </div>
  </div>
  <div v-else>
    <div class="select" style="flex-wrap: nowrap">
      <div class="label" ref="label">{{label}}</div>
      <div class="itemsSelect">
        <div v-if="!width_item" v-for="item in items" :key="item.value" v-bind:class="getClass(item)"
          @click="itemClick"
          v-bind:value="item.value">
          {{item.label}}
        </div>
        <div v-else v-for="item in items" :key="item.value" v-bind:class="getClass(item)"
             @click="itemClick"
             :style="{ width: width_item}"
             v-bind:value="item.value">
          {{item.label}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "rent-Select",
  props:{
    label:String,
    items:Array,
    value:String,
    tip_:String,
    field_:String,
    width_label:String,
    width_input:String,
    width_item:String,
    field_ob:Object,
    parent_ob:Function
  },
  data() {
    return {
      show:false,

    }
  },
  methods:{
    ...mapMutations({
      setStore:'rent/setField',
      setOb:'rent/setObField'

    }),
    itemClick:function (ev){
      if(this.$props.field_ob){
        this.setOb({
          ob:this.field_ob,
          field:this.field_
            ,value:ev.target.getAttribute('value')})
      }else {

        if(!this.parent_ob){
          this.setStore({field:this.field_,value:ev.target.getAttribute('value')})
        }else{
          this.$props.parent_ob(this.field_,ev.target.getAttribute('value'));
        }

      }
    },
    ulClick:function (ev){
      this.setOb({
        ob:this.field_ob,
        field:this.field_
        ,value:ev.target.getAttribute('value')})
      this.show = false
    },
    getlabel:function (){
      let label = this.items.find(item => item.value == this.value)
      if (label) label = label.label;
      return label;
    },
    getClass:function (item){
      if(item.value == this.value || item.label == this.value){
        return 'item itemActive'
      }else{
        return 'item'
      }
    }
  },
  mounted() {
    setTimeout(()=>{
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

  .listItems .item{
    text-align: left;
    padding: 8px;
    border: 1px solid black;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 4px;
    cursor: pointer;
  }

  .itemsSelect{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .itemsSelect .item{
    text-align: left;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid #999999;
    cursor: pointer;
    margin-right: 4px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 200px;
    min-height: 30px;
    max-height: 30px;
    margin-bottom: 4px;
    margin-top: 5px;
    border-radius: 12px;
    box-shadow: 0 0 8px rgb(0 0 0 / 80%);

  }


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

  ul{
    padding-top: 12px;
  }

  .itemActive{
    background-color: #00afe8;
    color: #eeeeee;
    border: 1px solid #999999;
    box-shadow: none !important;

  }


  input{
    height: 31px;
    padding-right: 38px;
    padding-left: 4px;
    width: 200px;

  }



  button{
    padding: 6px;
    margin-left: 0px;
    width: 31px;
    height: 31px;
    background: none;
    background-image: url("img/arrow-down.png");
    margin-left: -32px;
    background-size: 100% 100%;
    cursor: pointer;
    border: none;

  }
</style>