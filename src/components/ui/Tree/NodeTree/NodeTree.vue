<template>
  <li>
    <div class="label">
      <div style="display:flex;flex-wrap: nowrap;align-content: center;align-items: center;" class="nodeItem">
        <div>
          <img v-if="node.children && node.children.length && node.expanded"
             style="margin-right: 8px;width: 28px"
             v-bind:expanded="get_expanded()"
             v-bind:uid="node.id"
             ref="expanded"
             @click="click_expanded"
             src="./arrow-up.png" />
          <img v-if="node.children && node.children.length && !node.expanded"
             style="margin-right: 8px;width: 28px"
             v-bind:expanded="get_expanded()"
             v-bind:uid="node.id"
             ref="expanded"
             @click="click_expanded"
             src="./arrow-down.png" />

        </div>
        <input class="form-check-input" type="checkbox" value=""
               id="flexCheckChecked"
               ref="checked"
               @click="click_checked"
               v-bind:uid="node.id"
               v-bind:checked="get_checked()">
        <div style="margin-left: 12px">{{ node.name }}</div>
      </div>
    </div>

    <ul class="list-group"  v-if="node.children && node.children.length" >
      <transition-group name="fade" >
      <node
          v-for="item in  node.children"
          v-show="node.expanded"
          :key="item.id"
          :node="item">

      </node>
      </transition-group>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'node',
  props: {
    node: Object,

  },
  methods: {
    click_checked(ev){
      this.$store.commit('tree/check_item', {
        id:this.$refs.checked.getAttribute('uid'),
        value:this.$refs.checked.checked
      })
    },
    click_expanded(ev){
      this.$store.commit('tree/expanded_item', {
        id:this.$refs.expanded.getAttribute('uid'),
        value:!this.$refs.expanded.getAttribute('expanded')
      })
    },
    get_expanded() {
      if (this.node.expanded) {
        return true;
      }
      else {
        return null;
      }
    },
    get_checked() {
      if (this.node.checked) {
        return 'checked';
      }
      else {
        return null;
      }
    },
  },
  mounted() {

  }
};
</script>
<style>

.nodeItem{

}


ul {
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: scaleY(0.9);
}
</style>